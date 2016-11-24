import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import './index.css';
import App from './components/App/';
import Scraper from './components/Scraper/';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="scraper" component={Scraper}/>
		<Route path="s/:query" component={App}/>
		<Route path="*" component={App}/>
	</Router>
), document.getElementById('root'));
