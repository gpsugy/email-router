var React = require('react');
var ReactDOM = require('react-dom');

class Email extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showContent: false
		};

		this.toggleContent = this.toggleContent.bind(this);
		this.resetState = this.resetState.bind(this);
	}

	toggleContent() {
		this.setState({showContent: !this.state.showContent});
	}

	resetState() {
		this.setState({showContent: false});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.title !== this.props.title) {
			this.resetState();
		}
	}

	render() {
		return (
			<tbody>
				<tr onClick={this.toggleContent}>
					<th>
						{this.props.title}
					</th>
				</tr>
				{this.state.showContent &&
					<tr className="email-content">
						<td>
							{this.props.content}
						</td>
					</tr>
				}
			</tbody>
		);
	}
}

module.exports = Email;