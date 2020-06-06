import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Forgot from './components/auth/Forgot';
import Reset from './components/auth/Reset';

function App() {
	return (
		<div className="App">
			<Header />
			<Login />
			<Register />
			<Forgot />
			<Reset />
			<Footer />
		</div>
	)
}

export default App;