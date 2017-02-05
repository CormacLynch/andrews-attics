'use strict';

import React from 'react';
import Footer from '../components/Footer';

class ContactSection extends React.Component {
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
		let sectionClesses = 'section section--' + this.props.name;
		let preloadImageSrc = 'themes/base/images/' + this.props.name + '_background.jpg';
		let backgroundImage = this.state.isBackgroundImageLoaded ? 'themes/base/images/' + this.props.name + '_background.jpg' : '';
		let preloadStyle = {
			backgroundImage: 'url(themes/base/images/' + this.props.name + '_background_small.png)'
		};

		let backgroundImageStyle = {
			backgroundImage: 'url(' + backgroundImage + ')'
		};

		let preloadClasses = this.state.isBackgroundImageLoaded ? 'image__preload image__preload--contact image__preload-loaded' : 'image__preload image__preload--contact';

		return (
			<section id={this.props.name} className={sectionClesses} style={backgroundImageStyle}>
				<img
					className="image__main"
					src={preloadImageSrc}
					onLoad={this.handleImageLoaded.bind(this)} />
				<div className={preloadClasses} style={preloadStyle} />
				<div className="section__overlay"></div>
				<div className="section__holder">
					<div className="l-col-10 section__inner">
						<h2 className="section__title">Contact</h2>
						{this.renderContactDetails()}
					</div>
				</div>
				<Footer />
			</section>
		);
	}

	renderContactDetails() {
		return (
			<div className="contact">
				<div className="contact__telephone">
					<a className="link link--light" href="tel:+353872105564">087 210 5564</a>
					<a className="link link--light" href="tel:+35318433447">01 843 3447</a>
				</div>
				<div className="contact__address">
					<p className="h3 font-light">Rose Cottage,</p>
					<p className="h3 font-light">Leastown Lane,</p>
					<p className="h3 font-light">Oldtown,</p>
					<p className="h3 font-light">Co. Dublin,</p>
					<p className="h3 font-light">Ireland</p>
				</div>
			</div>
		);
	}

	handleImageLoaded() {
		this.setState({
			isBackgroundImageLoaded: true
		});
	}
};

export default ContactSection;
