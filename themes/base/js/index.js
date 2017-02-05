'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
require('../font/fonts.less');
require('../css/less/style.less');

window._touch = window.innerWidth < 769;

window.addEventListener('DOMContentLoaded', function() {
	let appElement = document.querySelector('[data-app]');

	if (appElement) {
		ReactDOM.render(< App / >, appElement);
	}
});
