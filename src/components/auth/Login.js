import React from 'react'

function Login() {
	return (
		<div>
			<form method="post" action="">
				<p>Login</p>
				<label>
					Login
					<input type="text" name="email" placeholder="email" />
				</label>
				<br />
				<label>
					Password
					<input type="password" name="password" placeholder="password" />
				</label>
				<br />
				<button class="btn btn-primary rounded-0">Login</button>
			</form>
		</div>
	)
}

export default Login