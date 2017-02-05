'use strict';

import React from 'react';

class HomeSection extends React.Component {
	static propTypes = {
		name: React.PropTypes.string.isRequired
	};

	static defaultProps = {

	};

	constructor() {
		super();

		this.state = {
			isBackgroundImageLoaded: false
		};
	}

	render() {
		let backgroundImage = this.state.isBackgroundImageLoaded ? 'themes/base/images/home_background.jpg' : '';
		let preloadStyle = {
			backgroundImage: 'url(themes/base/images/home_background_small.png)'
		};

		let backgroundImageStyle = {
			backgroundImage: 'url(' + backgroundImage + ')'
		};

		let preloadClasses = this.state.isBackgroundImageLoaded ? 'image__preload image__preload-loaded' : 'image__preload';

		return (
			<section id={this.props.name} className="section section--main" style={backgroundImageStyle}>
				<img
					className="image__main"
					src="themes/base/images/home_background.jpg"
					onLoad={this.handleImageLoaded.bind(this)} />
				<div className={preloadClasses} style={preloadStyle} />
				<div className="section__overlay"></div>
				<div className="section__holder">
					<div className="l-col-12 section__inner">
						<h1>Andrew's Attics</h1>
						<span className="h3">Don't Move On Move Up</span>
					</div>
				</div>
			</section>
		);
	}

	handleImageLoaded() {
		this.setState({
			isBackgroundImageLoaded: true
		});
	}
};

export default HomeSection;
