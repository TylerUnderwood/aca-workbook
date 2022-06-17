import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navigation from './containers/Navigation'
import Router from './Router'
import './App.css'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Navigation />
					<Router />
				</BrowserRouter>
			</Provider>
		)
	}
}

export default App;
