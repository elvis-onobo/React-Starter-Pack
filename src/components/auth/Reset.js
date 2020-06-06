import React from 'react'

function Reset() {
	return (
		<form>
			<p>Set New Password</p>
			<label>
				Password
				<input type="password" name="password" />
			</label>

			<br />
			<label>
				Confirm Password
				<input type="password" name="password_confirmation" />
			</label>
			<button>Reset Password</button>
		</form>
	)
}

export default Reset