import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router';
// Write imports for Router & BrowserRouter here //
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Router />
		</BrowserRouter>
	);
}

export default App;
