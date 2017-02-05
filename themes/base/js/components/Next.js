'use strict';

import React from 'react';
import Tappable from 'react-tappable';

class Next extends React.Component {
	static propTypes = {
		nextSlice: React.PropTypes.string.isRequired,
		onTap: React.PropTypes.func.isRequired
	};

	render() {
		return (
			<div className="next">
				<Tappable
					component="div"
					className="next__button"
					onTap={() => this.props.onTap(this.props.nextSlice)}>
					<span className="next__arrow"/>
				</Tappable>
			</div>
		);
	}
}

export default Next;
