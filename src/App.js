import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Forgot from './components/auth/Forgot';
import Reset from './components/auth/Reset';
import Landing from './components/Landing';
import NotFound from './components/NotFound';

import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path='/' component={Landing} exact />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/reset' component={Reset} />
				<Route path='/register' component={Forgot} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</div>
	)
}

export default App;