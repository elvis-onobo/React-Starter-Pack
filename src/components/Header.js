import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="card-header">
			<ul className="nav nav-pills card-header-pills">
				<li className="nav-item">
					<Link to="/" className="nav-link active">Home</Link>
				</li>
				<li className="nav-item">
					<Link to="/login" className="nav-link">Login </Link>
				</li>
				<li className="nav-item">
					<Link to="/register" className="nav-link">Register</Link>
				</li>
			</ul>
		</div>
	)
}

export default Header