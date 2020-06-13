import React from 'react'

function Reset() {
	return (
		<div className="row justify-content-center">
			<div className="card-body col-md-5">
				<form className="">
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
			</div>
			<div className="col-md-6 align-middle text-right display-1">
				<p>Everybody Makes Mistakes</p>
			</div>
		</div>
	)
}

export default Reset