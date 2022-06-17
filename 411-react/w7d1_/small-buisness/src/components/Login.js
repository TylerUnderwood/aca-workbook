import React, { Component } from 'react'
import {
	TextField,
	Button,
	Container
} from '@material-ui/core'

class Login extends Component {

	state = {
		username: 'OlGreg',
		password: 'MotherLicker',
	}

	handleTextChange = ( event ) => {
		const state = { ...this.state }
		state[event.target.name] = event.target.value
		this.setState(state)
	}

	login = ( event ) => {
		event.preventDefault()
		
		this.props.login( this.state.username )
		
		document.cookie = `loggedIn=true;max-age=60*1000`
		this.props.history.push('/listings')
	}

	render() {
		return (
			<Container maxWidth="sm">
				<form className="login-form" onSubmit={this.login}>
					<TextField
						//required
						onChange={this.handleTextChange}
						value={this.state.username}
						name="username"
						label="Username"
						type="text" />
					<TextField
						//required
						onChange={this.handleTextChange}
						value={this.state.password}
						name="password"
						label="Password"
						type="password" />
					<Button
						type="submit"
						className="login-button"
						variant="contained"
						color="primary">Login</Button>
				</form>
			</Container>
		);
	}
}

export default Login;