import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { 
	AppBar, 
	Toolbar, 
	IconButton, 
	Typography 
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

class Navigation extends Component {

	logout = () => {
		let confirmation = window.confirm( 'Are you sure you want to logout?' )

		if ( confirmation ) {
			this.props.logout()
			document.cookie = "loggedIn="
		}
	}

	render() {
		return (
			<AppBar position="relative">
				<Toolbar>
					<Typography variant="h6" style={{ flexGrow: "1" }} className="nav-logo">
						<Link to="/">Austin Small Business</Link>
					</Typography>
					<ul className="nav-list">
						<li className="nav-list-item">
							<Link to="/listings">Listings</Link>
						</li>
						{ this.props.user.loggedIn && (
							<li className="nav-list-item">
								<Link to="/add-listing">Add</Link>
							</li>
						)}
						{ this.props.user.loggedIn ? (
							<li className="nav-list-item">
								<Link to="/login" onClick={() => this.logout()}>LOGOUT</Link>
							</li>
						):(
							<li className="nav-list-item">
								<Link to="/login">LOGIN</Link>
							</li>
						)}
					</ul>
					<IconButton color="inherit">
						<MenuIcon />
					</IconButton>
				</Toolbar>
				{ this.props.user.loggedIn && (
					<div className="logged-in-bar">
						<span>{this.props.user.username}</span>
					</div>
				)}
			</AppBar>
		)
	}
}

export default Navigation