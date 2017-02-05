'use strict';

import React from 'react';

/**
 *
 *
 * A  tag (`</>`) that
 *
 *
 * @class Services
 */
class Services extends React.Component {
	static propTypes = {
		data: React.PropTypes.array.isRequired,
		show: React.PropTypes.bool.isRequired
	};

	constructor() {
		super();
	}

	render() {
		return (
			<div className="services">
				{this.renderServices()}
			</div>
		);
	}

	renderServices() {
		return this.props.data.map((service, i) => {
			let imageUrl = '/themes/base/images/services/' + service.image + '.png';
			let servicesClasses = 'services__item h-clearfix l-col-' + (12 / this.props.data.length);
			let imageClasses = this.props.show ? 'services__imgHolder services__imgHolder--isActive' : 'services__imgHolder';
			let titleClasses = this.props.show ? 'services__title services__title--isActive' : 'services__title';

			return (
				<div key={i} className={servicesClasses}>
					<div className={imageClasses}>
						<img src={imageUrl} />
					</div>
					<h4 className={titleClasses}>{service.title}</h4>
				</div>
			);
		});
	}
};

export default Services;
