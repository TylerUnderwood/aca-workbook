import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
//import MenuIcon from '@material-ui/icons/Menu'
// Import { Link } here //
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    FakeCars.com
                </Typography>
                <ul className="nav-list">
					<li className="nav-list-item">
						<Link to="/" color="inherit">Home</Link>
					</li>
					<li className="nav-list-item">
						<Link to="/about" color="inherit">About</Link>
					</li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation