import React from 'react'

function Forgot() {
	return (
		<div>
			<p>Reset Password</p>
			<form className="col-md-6 row">
				<input type="email" name="email" className="form-control rounded-0 col-md-8" placeholder="Enter your account e-mail" />
				<button className="btn btn-primary rounded-0 col-md-4">Send Password Reset Link</button>
			</form>
		</div>
	)
}

export default Forgot