import React from 'react'

function Forgot() {
	return (
		<div className="row justify-content-center">
			<form className="col-md-6 card-body">
				<label>Reset Password</label>
				<div className="row">
					<input type="email" name="email" className="form-control rounded-0 col-md-6" placeholder="Enter your e-mail" />
					<button className="btn btn-primary rounded-0 col-md-4">Send Password Reset Link</button>
				</div>
			</form>
		</div>
	)
}

export default Forgot