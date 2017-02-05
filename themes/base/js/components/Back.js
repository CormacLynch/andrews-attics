'use strict';

import React from 'react';
window._touch = window.innerWidth < 769;

class Back extends React.Component {
	static propTypes = {
		backToMainSlice: React.PropTypes.string.isRequired,
		onTap: React.PropTypes.func.isRequired
	};

	constructor() {
		super();

		this.state = {
			bottomOfHomeSection: 0,
			showToTop: false
		};
	}

	componentDidMount() {
		this.getBottomOfHomeSection();
		setInterval(function() {
			this.shouldToTopBeShown();
		}.bind(this), 400);
	}

	render() {
		let backClasses = this.state.showToTop ? 'back back--show' : 'back';

		if (window._touch) {
			return null;
		}

		return (
			<div className={backClasses} onClick={() => this.props.onTap(this.props.backToMainSlice)}>
				<span>To Top</span>
			</div>
		);
	}

	getBottomOfHomeSection = () => {
		let bodyRect = document.body.getBoundingClientRect();
		let elemRect = document.getElementById(this.props.backToMainSlice).getBoundingClientRect();
		let offset = (elemRect.bottom - bodyRect.top);

		this.setState({
			bottomOfHomeSection: offset - 1
		});
	}

	shouldToTopBeShown = () => {
		if (document.body.scrollTop > this.state.bottomOfHomeSection) {
			this.setState({
				showToTop: true
			});
		} else {
			this.setState({
				showToTop: false
			});
		}
	}
}

export default Back;
