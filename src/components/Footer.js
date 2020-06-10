import React from 'react';

function Footer() {
	const date = new Date()

	return (
		<div className="card-footer text-muted">
			<div>&copy; {date.getFullYear()}, Elvis Onobo</div>
		</div>
	)
}

export default Footer