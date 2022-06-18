import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: true,
		}
	}

	toggleSignIn = () => {
		this.setState({ loggedIn: !this.state.loggedIn })
	}

	render() {
		return (
			<div id="container">
				<header>
					<NavBar />
				</header>

				<section className="dashboard trim gutter">
					{ this.state.loggedIn && (
						<Dashboard />
					)}
					{ !this.state.loggedIn && (
						<SignIn signIn={this.toggleSignIn} />
					)}
				</section>
			</div>
		)
	}
}

export default App;