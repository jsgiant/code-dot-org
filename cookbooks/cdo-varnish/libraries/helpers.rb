# Various Ruby helper methods to generate Varnish VCL from the base configuration.

QUERY_REGEX = "(\\?[a-z0-9]+)?$"
def path_to_regex(path)
  path = "^/#{path.sub(/^\//,'')}"
  if path[-1] == '*'
    path.slice!(-1)
  else
    path = path + QUERY_REGEX
  end
  path
end

def extensions_to_regex(exts)
  return [] if exts.empty?
  ["(?i)(#{exts.join('|').gsub('.','\.')})#{QUERY_REGEX}"]
end

def paths_to_regex(behavior, backend=false, proxy=false)
  req = backend ? 'bereq' : 'req'
  path_config = behavior['path']
  path_config = [path_config] unless path_config.is_a?(Array)
  extensions, paths = path_config.partition{ |path| path[0] == '*' }
  elements = paths.map{|x|path_to_regex(x)}
  elements = extensions_to_regex(extensions.map{|x|x.sub(/^\*/,'')}) + elements unless proxy
  elements.empty? ? 'false' : elements.map{|el| "#{req}.url ~ \"#{el}\""}.join(' || ')
end

def process_cookies(behavior, response=false)
  if !response
    cookies = behavior['cookies']
    cookies = ['NO_CACHE'] if cookies == 'none'
    "cookie.filter_except(\"#{cookies.join(',')}\");"
  else
    behavior['cookies'] == 'none' ?
      'unset beresp.http.set-cookie;' :
      ''
  end
end

def process_proxy(behavior, default)
  proxy = behavior['proxy'] || default
  "set req.backend_hint = #{proxy}.backend();"
end

def canonical_hostname(domain)
  return "console.#{domain}" if node.name == 'production-console'
  return "daemon.#{domain}" if node.name == 'production-daemon'
  return domain if rack_env?(:production)

  # our HTTPS wildcard certificate only supports *.code.org
  # 'env', 'studio.code.org' over https must resolve to 'env-studio.code.org' for non-prod environments
  sep = domain.include?('.code.org') ? '-' : '.'

  # Handle some hard-coded exceptions
  {
    react: 'react',
    translate: 'crowdin',
    levelbuilder: 'levelbuilder-staging',
    'levelbuilder-dev' => 'levelbuilder-development',
  }.each do |subdomain, node_name|
    return "#{subdomain}#{sep}#{domain}" if node.name == node_name
  end

  "#{node.chef_environment}#{sep}#{domain}"
end

def rack_env?(env)
  env.to_s == node.chef_environment
end

def append_env(name)
  name += "_#{node.chef_environment}" unless rack_env?(:production)
  name
end

def if_app(app, backend=false)
  req = backend ? 'bereq' : 'req'
  app == 'dashboard' ?
    ('if ('+req+'.http.host ~ "(dashboard|studio).code.org$") {') :
    '} else {'
end
