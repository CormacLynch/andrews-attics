'use strict';

import React from 'react';
import Slider from 'react-slick';

/**
 *
 *
 * A  tag (`</>`) that
 *
 *
 * @class ProjectsSection
 */
class ProjectsSection extends React.Component {
	static propTypes = {
		data: React.PropTypes.array.isRequired,
		name: React.PropTypes.string.isRequired
	};

	static defaultProps = {

	};

	constructor() {
		super();
	}

	render() {
		let sectionClesses = 'section section--' + this.props.name;

		let settings = {
			dots: false,
			infinite: false,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		let items = this.props.data.map((project, i) => {
			let imageSrc = 'themes/base/images/projects/' + project.image + '.jpg';
			return (
				<div className="carousel__item" key={'project-' + i}>
					<img className="carousel__image" src={imageSrc} />
					<div className="carousel__content">
						<p className="h3">{project.content}</p>
					</div>
				</div>
			);
		});

		return (
			<section id={this.props.name} className={sectionClesses}>
				<div className="section__holder">
					<div className="l-col-12 section__inner">
						<h2 className="section__title">Projects</h2>
					</div>
					<Slider
						afterChange={this.afterChange}
						className="carousel l-col-12"
						{...settings}>
						{items}
					</Slider>
				</div>
			</section>
		);
	}
};

export default ProjectsSection;
