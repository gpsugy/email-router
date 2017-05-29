var React = require('react');
var ReactDOM = require('react-dom');

var EMAILS = require('../emails');
var Email = require('./email');

class EmailList extends React.Component {
	constructor(props) {
		super(props);

		this.generateList = this.generateList.bind(this);
	}

	generateList() {
		let filteredEmails = (this.props.match.path === '/spam') ? EMAILS.spam : EMAILS.inbox;
		let rows = [];

		for (let email of Object.values(filteredEmails)) {
			rows.push(<Email key={email.id} title={email.title} content={email.content} />);
		}
		return rows;
	}

	render() {
		return (
			<div>
				<table className="email-list">
					{this.generateList()}
				</table>
			</div>
		);
	}
}

module.exports = EmailList;