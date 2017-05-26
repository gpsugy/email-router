import { Switch, Route } from 'react-router-dom'
var React = require('react');
var ReactDOM = require('react-dom');

const Main = () => (
	<main>
		<Switch>
			<Route path='/inbox' />
			<Route path='/spam' />
		</Switch>
	</main>
)

module.exports = Main;