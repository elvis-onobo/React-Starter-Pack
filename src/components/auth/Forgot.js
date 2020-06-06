import React from 'react'

function Forgot() {
	return (
		<form>
			<p>Reset Password</p>
			<label>
				Email
				<input type="email" name="email" placeholder="Enter your account e-mail" />
			</label>
			<button>Send Password Reset Link</button>
		</form>
	)
}

export default Forgot