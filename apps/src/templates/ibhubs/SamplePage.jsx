import PropTypes from 'prop-types';
import React from 'react';

export default class SamplePage extends React.Component {
  static propTypes = {
    accessToken: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <h3>iB Hubs</h3>
        <p>{this.props.accessToken}</p>
        <h4>India 4.0, Global hub for technologie</h4>
      </div>
    );
  }
}
