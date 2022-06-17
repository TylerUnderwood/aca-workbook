import React from 'react';
import './App.css';
import Beers from './components/Beers'

function App() {
	return (
		<section className="frame gutter">
			<div className="wrapper">
				<h3>We gunna like some beers today</h3>
				<div className="frame-top">
					<Beers />
				</div>
			</div>
		</section>
	);
}

export default App;
