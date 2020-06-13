import React from 'react';
import { Link } from 'react-router-dom';

function Header() {


	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/" className="navbar-brand">ElvisOnobo</Link>

			<div className="float-right">
				<ul className="nav nav-pills card-header-pills">
					<li className="nav-item">
						<Link to="/login" className="nav-link active">Login </Link>
					</li>
					<li className="nav-item">
						<Link to="/register" className="nav-link">Register</Link>
					</li>
					<li className="nav-item">
						<Link to="/reset" className="nav-link">Reset Password</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Header