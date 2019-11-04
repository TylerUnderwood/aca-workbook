import React, { Component } from 'react'

export class NewsFeed extends Component {

	constructor(props) {
		super(props);
		this.state = {
			term: '',
			author: '',
			date: '',
			errorMsg: '',
			news: [],
		};
	}

	onChange = ( event ) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});

		// this.setState({
		// 	[event.target.name]: value
		// });
	}

  	onTermSubmit = ( event ) => {
		event.preventDefault();
		this.getSearchByTerm( this.state.term )
	}

	onAuthorSubmit = ( event ) => {
		event.preventDefault();
		this.getSearchByAuthor( this.state.author )
	}

	onDateSubmit = ( event ) => {
		event.preventDefault();
		this.getSearchByDate( this.state.date )
	}

	getSearchByTerm = ( searchValue ) => {
		fetch(`http://hn.algolia.com/api/v1/search?query=${ searchValue }`)
			.then( res => res.json() )
			.then( parsedJSON => {
				// console.log(parsedJSON)
				this.setState({news: parsedJSON.hits}) 
			})
			.catch( error => this.errorMsg = error)
	};
	getSearchByAuthor = ( searchValue ) => {
		fetch(`http://hn.algolia.com/api/v1/search?tags=author_${ searchValue }`)
			.then( res => res.json() )
			.then( parsedJSON => {
				// console.log(parsedJSON)
				this.setState({news: parsedJSON.hits}) 
			})
			.catch( error => this.errorMsg = error)
	};
	getSearchByDate = ( searchValue ) => {
		fetch(`http://hn.algolia.com/api/v1/search_by_date?query=${ searchValue }`)
			.then( res => res.json() )
			.then( parsedJSON => {
				// console.log(parsedJSON)
				this.setState({news: parsedJSON.hits}) 
			})
			.catch( error => this.errorMsg = error)
	};

	render() {
		return (<>
			<h2>The News</h2>
			<div className="frame">
				<h6>Search by headline</h6>
				<form className="single-form" onSubmit={this.onTermSubmit}>
					<input 
						type="text"
						name="term"
						value={this.state.term}
						onChange={this.onChange} />
					<button>Search</button>
				</form>
				<h6>Search by author</h6>
				<form className="single-form" onSubmit={this.onAuthorSubmit}>
					<input 
						type="text"
						name="author"
						value={this.state.author}
						onChange={this.onChange} />
					<button>Search</button>
				</form>
				<h6>Search by date</h6>
				<form className="single-form" onSubmit={this.onDateSubmit}>
					<input 
						type="date"
						name="date"
						value={this.state.date}
						onChange={this.onChange} />
					<button>Search</button>
				</form>
			</div>
			<ul>
				{this.state.news.map(( news, index ) => {
					return (
						<li className="m-t" key={index+1}>
							<a className="heading" href={news.url} target="_blank" rel="noopener noreferrer">
								<h4>{news.title}</h4>
								<cite>{news.author}</cite>
								<span className="divider">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
								<small className="date">{news.created_at}</small>
							</a>
						</li>
					)
				})}
			</ul>
		</>)
	}
}

export default NewsFeed
