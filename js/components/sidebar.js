import { Link } from 'react-router-dom'
var React = require('react');
var ReactDOM = require('react-dom');

const Sidebar = () => (
	<nav>
		<ul>
			<li><Link to='/inbox'>Inbox</Link></li>
			<li><Link to='/spam'>Spam</Link></li>
		</ul>
	</nav>
)


module.exports = Sidebar;