import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			firstname: '',
			lastname: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	// this handleChange method will work for all all text based entries but not things like checkbox
	handleChange(event) {
		this.setState({
			// event.target.name grabs the name of the form field e.g name="firstname"
			// event.target.value grabs the value entered into the from 
			[event.target.name]: event.target.value
		})
	}

	render() {
		return (
			<div className="App">
				<form>
					<input type="text" name="firstname" placeholder="First Name" onChange={this.handleChange} />
					<input type="text" name="lastname" placeholder="Last Name" onChange={this.handleChange} />
					<p>{this.state.firstname} {this.state.lastname}</p>
				</form>
			</div>
		)
	}
}

export default App;
