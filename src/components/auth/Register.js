import React from 'react';

function Register() {
	return (
		<div className="row justify-content-center">
			<div className="card-body col-md-5">
				<form className="">
					<h3>Register</h3>
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
					<button type="submit" className="btn btn-primary rounded-0">Register</button>
				</form>
			</div>
			<div className="col-md-6 align-middle text-right display-1">
				<p>A Better World</p>
			</div>
		</div>
	)
}

export default Register