import React from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed';

const App = () => {
	return (
		<section className="frame gutter">
			<div className="wrapper">
				<NewsFeed />
			</div>
		</section>
	);
}

export default App;
