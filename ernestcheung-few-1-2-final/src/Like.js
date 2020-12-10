import React, { Component } from 'react';

class Like extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0,
			show: true,
		};
	}
	render() {
		return (
			<div>
				<h3> Likes </h3>
				<button onClick={this.Decrease}> - 1</button>
				<button onClick={this.Increase}> + 1</button>
				<header>
					<h2> {this.state.clicks} </h2>
				</header>
			</div>
		);
	}

	Increase = () => {
		this.setState({ clicks: this.state.clicks + 1 });
	};

	Decrease = () => {
		this.setState({ clicks: this.state.clicks - 1 });
	};

	Show = () => {
		this.setState({ show: this.state.show });
	};
}

export default Like;
