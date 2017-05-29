import { Switch, Route } from 'react-router-dom'
var React = require('react');
var ReactDOM = require('react-dom');

var EmailList = require('./email-list');

const Main = () => (
	<main>
		<Switch>
			<Route path='/inbox' component={EmailList} />
			<Route path='/spam' component={EmailList} />
		</Switch>
	</main>
)

module.exports = Main;