'use strict';

import React from 'react';
import Tappable from 'react-tappable';

class Navigation extends React.Component {
	static propTypes = {
		data: React.PropTypes.array.isRequired,
		onTap: React.PropTypes.func.isRequired
	};

	constructor() {
		super();
	}

	render() {
		return (
			<header className="header">
				<div className="l-col-6 logo__holder">
					<div className="logo" />
				</div>
				<div className="l-col-6 navigation">
					<ul className="navigation__holder">
						{this.renderNavigationItems()}
					</ul>
				</div>
			</header>
		);
	}

	renderNavigationItems() {
		return this.props.data.map((navitem, i) => {
			return (
				<li key={'nav_item-' + i} className="navigation__item">
					<Tappable
						component="span"
						className="navigation__link"
						onTap={() => this.props.onTap(navitem.navigateTo)}>
						{navitem.title}
					</Tappable>
				</li>
			);
		});
	}
};

export default Navigation;
