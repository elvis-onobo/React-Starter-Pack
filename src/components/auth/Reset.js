import React from 'react'

function Reset() {
	return (
		<form className="col-md-6">
			<div className="form-group">
				<label for="exampleInputPassword1">Set New Password</label>
				<input type="email" className="form-control rounded-0" id="exampleInputPassword1" />
			</div>
			<div className="form-group">
				<label for="exampleInputPassword1">Confirm Password</label>
				<input type="email" className="form-control rounded-0" id="exampleInputPassword1" />
			</div>
			<button className="btn btn-primary rounded-0">Reset Password</button>
		</form>
	)
}

export default Reset