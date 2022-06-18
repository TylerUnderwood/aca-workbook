import React from 'react';
import { AppBar, Button, TextField, Typography } from '@material-ui/core';

const SignIn = props => (
	<div className="signin-container">
		<AppBar position="static">
			<Typography>Sign In</Typography>
		</AppBar>
		<form className="signin-form">
			<TextField
				variant="outlined"
				margin="normal"
				//required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
			/>
			<TextField 
				variant="outlined"
				margin="normal"
				//required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
			/>
			<Button
				//type="submit"
				fullWidth
				variant="contained"
				color="primary"
				onClick={() => { props.signIn() }}
			>Sign In</Button>
		</form>
	</div>
)

export default SignIn;