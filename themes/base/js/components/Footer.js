'use strict';

import React from 'react';

/**
 *
 *
 * A  tag (`</>`) that
 *
 *
 * @class Footer
 */
class Footer extends React.Component {
	static propTypes = {

	};

	static defaultProps = {

	};

	constructor() {
		super();
	}

	render() {
		let html = '&#169; Copyright <a class="footer__link" target="_blank" href="http://cormaclyn.ch/">Cormac Lynch</a> all rights reserved';

		return (
			<footer className="footer l-col-12">
				<p className="footer__copyright font-dark" dangerouslySetInnerHTML={{__html: html}} />
			</footer>
		);
	}
};

export default Footer;
