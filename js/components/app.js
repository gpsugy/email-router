var React = require('react');
var ReactDOM = require('react-dom');

var Sidebar = require('./sidebar');
var Main = require('./main');

const App = () => (
	<div>
		<Sidebar />
		<Main />
	</div>
)

module.exports = App;