import PropTypes from 'prop-types';
import React from 'react';

export default class SamplePage extends React.Component {
  static propTypes = {
    accessToken: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <h3>Hi {this.props.username}!</h3>
        <p>Your access token is{this.props.accessToken}</p>
        <h4>Welcome to iB Hubs</h4>
      </div>
    );
  }
}
