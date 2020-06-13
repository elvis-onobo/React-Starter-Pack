import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
	return (
		<div className="row justify-content-center">
			<div className="card-body col-md-5">
				<form className="">
					<h3>Login</h3>
					<div className="form-group">
						<label for="exampleInputPassword1">E-mail</label>
						<input type="email" className="form-control rounded-0" id="exampleInputPassword1" placeholder="E-mail" />
					</div>
					<div className="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" className="form-control rounded-0" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<div className="form-group form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					Remember me
				</div>
					<div className="">
						<button type="submit" className="btn btn-primary rounded-0">Login</button>
						<Link to="/forgot" className="nav-link active">Forgot Password?</Link>
					</div>
				</form>
			</div>
			<div className="col-md-6 align-middle text-right display-1">
				<p>Build Something Amazing</p>
			</div>
		</div>
	)
}

export default Login