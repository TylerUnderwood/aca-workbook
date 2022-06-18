import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, } from '@material-ui/core';

class NavBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			someString: 'hoafinvbrwo',
		};
	}

	render() { return (
		<div className="nav-bar">
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">FML.fm</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)}
}

export default NavBar;
