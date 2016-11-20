import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import Scraper from './components/scraper/scraper';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/scraper" component={Scraper}/>
		<Route path="*" component={App}/>
	</Router>
), document.getElementById('root'));
