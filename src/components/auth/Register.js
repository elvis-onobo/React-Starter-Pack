import React from 'react';

function Register() {
	return (
		<form method="post" action="">
			<p>Register</p>
			<label>
				Name
				<input type="text" name="name" placeholder="Name" />
			</label>
			<br />
			<label>
				Surname
				<input type="text" name="surname" placeholder="Surname" />
			</label>
			<br />
			<label>
				Email
				<input type="email" name="email" placeholder="Email" />
			</label>
			<br />
			<label>
				Password
				<input type="password" name="password" placeholder="password" />
			</label>
			<br />
			<button class="btn btn-primary rounded-0">Register</button>
		</form>
	)
}

export default Register