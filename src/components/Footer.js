import React from 'react';

function Footer() {
	const date = new Date()

	return (
		<div>
			<div>&copy; {date.getFullYear()}, Elvis Onobo</div>
		</div>
	)
}

export default Footer