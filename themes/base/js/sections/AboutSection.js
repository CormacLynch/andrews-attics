'use strict';

import React from 'react';
import Services from '../components/Services';
import ServicesData from '../data/ServicesData';
window._touch = window.innerWidth < 769;

class AboutSection extends React.Component {
	static propTypes = {
		name: React.PropTypes.string.isRequired
	};

	static defaultProps = {

	};

	constructor() {
		super();

		this.state = {
			showPoint: 0,
			showServices: false
		};
	}

	componentDidMount() {
		this.getAboutShowPoint();
		setInterval(function() {
			this.shouldServicesBeShown();
		}.bind(this), 200);
	}

	render() {
		let sectionClesses = 'section section--' + this.props.name;

		return (
			<section id={this.props.name} className={sectionClesses}>
				<div className="section__holder">
					<div className="l-col-10 section__inner">
						<h2 className="section__title">About</h2>
						<div className="section__content h-clearfix">
							<p>Andrew Poppleton has been a carpenter for the past 20 years and in this time he has become a master at his trade. We provide the services shown below.</p>
						</div>
						<Services data={ServicesData} show={this.state.showServices} />
					</div>
				</div>
			</section>
		);
	}

	getAboutShowPoint = () => {
		let bodyRect = document.body.getBoundingClientRect();
		let elemRect = document.getElementById(this.props.name).getBoundingClientRect();
		let offset = (elemRect.top - bodyRect.top);

		this.setState({
			showPoint: offset / 2 + offset / 4
		});
	}

	shouldServicesBeShown = () => {
		if (window._touch) {
			this.setState({
				showServices: true
			});
		}

		if (document.body.scrollTop > this.state.showPoint) {
			this.setState({
				showServices: true
			});
		}
	}
};

export default AboutSection;
