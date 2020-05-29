import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			firstname: '',
			lastname: '',
			isFriendly: true,
			gender: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	// this handleChange method will work for all all text based entries but not things like checkbox
	handleChange(event) {
		// get the properties of the form from the event.target
		const { name, value, type, checked } = event.target
		if (type === 'checkbox') {
			this.setState({ [name]: checked })
		} else {
			this.setState({
				// event.target.name grabs the name of the form field e.g name="firstname"
				// event.target.value grabs the value entered into the from 
				[name]: value
			})
		}
	}

	render() {
		return (
			<div className="App">
				<form>
					<input type="text"
						name="firstname"
						value={this.state.firstname}
						placeholder="First Name"
						onChange={this.handleChange}
					/>
					<br />
					<input type="text"
						name="lastname"
						value={this.state.lastname}
						placeholder="Last Name"
						onChange={this.handleChange}
					/>
					<br />
					<textarea
						value={"default value"}
						onChange={this.handleChange}
					/>
					<br />
					<label>
						<input
							type="checkbox"
							name="isFriendly"
							checked={this.state.isFriendly}
							onChange={this.handleChange}
						/>
						Is Friendly?
					</label>

					<br />
					<label>
						<input
							type="radio"
							name="gender"
							value="male"
							checked={this.state.gender === 'male'}
							onChange={this.handleChange}
						/>
						Male
					</label>

					<br />
					<label>
						<input
							type="radio"
							name="gender"
							value="female"
							checked={this.state.gender === 'female'}
							onChange={this.handleChange}
						/>
						Female
					</label>
					{/* check out FORMIK for easy use of React froms */}


					<h1>{this.state.firstname} {this.state.lastname}</h1>
					<h2>You are a {this.state.gender}</h2>
				</form>
			</div>
		)
	}
}

export default App;