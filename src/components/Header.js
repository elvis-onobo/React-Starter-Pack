import React from 'react';

function Header() {
	return (
		<div className="card-header">
			<ul className="nav nav-pills card-header-pills">
				<li className="nav-item">
					<a className="nav-link active" href="google.com">Active</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="google.com">Link</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" href="google.com" tabindex="-1" aria-disabled="true">Disabled</a>
				</li>
			</ul>
		</div>
	)
}

export default Header