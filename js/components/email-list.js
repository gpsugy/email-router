var React = require('react');
var ReactDOM = require('react-dom');

var EMAILS = require('../emails');

function what() {
	return <h2>WHAT</h2>;
}

class EmailList extends React.Component {
	constructor(props) {
		super(props);

		this.generateList = this.generateList.bind(this);
	}

	generateList() {
		let filteredEmails = (this.props.match.path === '/spam') ? EMAILS.spam : EMAILS.inbox;

		let rows = [];

		for (let email of Object.values(filteredEmails)) {
			rows.push(<tr key={email.id}><th>{email.title}</th></tr>);
		}

		// for (let email of filteredEmails) {
		//	rows.push(<h3>email.title<h3/>);
		//	rows.push(<ProductRow key={product.name} name={product.name} price={product.price} stocked={product.stocked} />)
		//}
		return rows;
	}

	render() {
		return (
			<div>
				<table>
					<tbody>
						{this.generateList()}
					</tbody>
				</table>
			</div>
		);
	}
}

module.exports = EmailList;