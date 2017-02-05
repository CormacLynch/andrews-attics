'use strict';

import React from 'react';
import scrollTo from '../utils/scrollTo';
import HomeSection from '../sections/HomeSection';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';
import Navigation from '../components/Navigation';
import Next from '../components/Next';
import Back from '../components/Back';
import NavigationData from '../data/NavigationData';
import ProjectsData from '../data/ProjectsData';

window._touch = window.innerWidth < 415;

/**
 * App controller
 *
 * A App tag (`<App/>`) that
 *
 *
 * @class app
 */

class App extends React.Component {
	static propTypes = {

	};

	static defaultProps = {

	};

	constructor() {
		super();

		this.state = {

		};
	}

	componentWillMount() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Back backToMainSlice={'home'} onTap={this.handleNavigationTap} />
				<Navigation data={NavigationData} onTap={this.handleNavigationTap} />
				<HomeSection name="home"/>
				<Next nextSlice="about" onTap={this.handleNavigationTap} />
				<AboutSection name="about"/>
				<ProjectsSection name="projects" data={ProjectsData} />
				<ContactSection name="contact"/>
			</div>
		);
	}

	handleNavigationTap = (navigateTo) => {
		let bodyRect = document.body.getBoundingClientRect();
		let elemRect = document.getElementById(navigateTo).getBoundingClientRect();
		let offset = (elemRect.top - bodyRect.top);

		scrollTo(offset, null, 1200);
	}
};

export default App;
