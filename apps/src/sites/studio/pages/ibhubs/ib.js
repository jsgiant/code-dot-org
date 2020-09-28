import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import SamplePage from '@cdo/apps/templates/ibhubs/SamplePage';

$(document).ready(function() {
  const script = document.querySelector('script[data-ibhubs]');
  const data = script.dataset.ibhubs;
  console.log(data);
  ReactDOM.render(
    <SamplePage accessToken={data} />,
    document.getElementById('sample-page-container')
  );
});
