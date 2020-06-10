import React from 'react';

function Register() {
	return (
		<div>
			<form className="col-md-6">
				<p>Register</p>
				<div className="form-group">
					<label for="exampleInputPassword1">Name</label>
					<input type="email" className="form-control rounded-0" id="exampleInputPassword1" />
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Surname</label>
					<input type="email" className="form-control rounded-0" id="exampleInputPassword1" />
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Email address</label>
					<input type="email" className="form-control rounded-0" id="exampleInputPassword1" />
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" className="form-control rounded-0" id="exampleInputPassword1" />
				</div>
				<button type="submit" className="btn btn-primary">Register</button>
			</form>
		</div>
	)
}

export default Register