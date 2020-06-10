import React from 'react'

function Login() {
	return (
		<div>
			<form className="col-md-6">
				<p>Login</p>
				<div className="form-group">
					<label for="exampleInputPassword1">Email address</label>
					<input type="email" className="form-control rounded-0" id="exampleInputPassword1" />
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" className="form-control rounded-0" id="exampleInputPassword1" />
				</div>
				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" for="exampleCheck1">Remember me</label>
				</div>
				<button type="submit" className="btn btn-primary">Login</button>
			</form>
		</div>
	)
}

export default Login