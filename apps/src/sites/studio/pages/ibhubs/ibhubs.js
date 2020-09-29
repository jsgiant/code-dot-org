import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import SamplePage from '@cdo/apps/templates/ibhubs/SamplePage';

$(document).ready(function() {
  const script = document.querySelector('script[data-ibhubs]');
  const userData = JSON.parse(script.dataset.ibhubs);
  const {username, access_token} = userData;
  ReactDOM.render(
    <SamplePage username={username} accessToken={access_token} />,
    document.getElementById('sample-page-container')
  );
});
