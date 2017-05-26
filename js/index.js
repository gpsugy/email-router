require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

import { HashRouter } from 'react-router-dom'

var App = require('./components/app');

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));