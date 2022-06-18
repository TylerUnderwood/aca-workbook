import React, { Component } from 'react'

export class Beers extends Component {

	constructor(props) {
		super(props);
		this.state = {
			beers: [],
			userLiked: {}
		}
	}

	fetchData() {
		fetch ('https://api.punkapi.com/v2/beers')
			.then( response => response.json() )
			.then( data => data.map( beer => ({
				name: beer.name,
				tagline: beer.tagline,
				abv: beer.abv,
				ibu: beer.ibu,
			})))
			.then( beers => this.setState({
				beers,
			}))
			.catch( error => console.log( error ) )
	}

	componentDidMount() {
		this.fetchData();
	}

	likeBeer( beerId ) {
		let newLiked = {...this.state.userLiked}
		newLiked[beerId] = !newLiked[beerId]
		this.setState({ userLiked: newLiked })
	}

	render() { 

		let { beers, userLiked } = this.state;

		return (

		<ul className="beers-list">
			{ beers.map(( beer ) => (

				<li key={beer.name} className="beer-card">
					<div className="beer-details">
						<h5 className="name-line">{beer.name}</h5>
						<span className="tagline-line"><strong>Tagline:</strong> {beer.tagline}</span><br/>
						<span className="abv-line"><strong>ABV:</strong> {beer.abv}</span><br/>
						<span className="ibu-line"><strong>IBU:</strong> {beer.ibu}</span><br/>
					</div>
					<button 
						className={[
							'btn', 
							userLiked[beer.name] ? "active" : null,
						].join(' ')} 
						onClick={() => this.likeBeer( beer.name )}>
						{userLiked[beer.name] ? "Liked" : "Like"}
					</button>
				</li>

			))}
		</ul>

		)
	}
}

export default Beers;