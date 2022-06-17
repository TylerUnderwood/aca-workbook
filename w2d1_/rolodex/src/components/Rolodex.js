import React, { Component } from 'react'

export class Rolodex extends Component {

	constructor(props) {
		super(props);
		this.state = {
			errorMsg: '',
			users: [],
		};
	}

	getSearchResults = () => {
		fetch(`https://randomuser.me/api?results=25`)
			.then( res => res.json() )
			.then( data => {
				this.setState({users: data.results})
			})
			.catch( error => this.errorMsg = error)
	}

	render() { return (
		<div className="rolodex">
			<h2 className="m-b">Rolodex</h2>
			<h6 className="m-b">Get twenty five random people</h6>
			<button onClick={(e) => this.getSearchResults(e)}>Search</button>
			<ul className="frame-top">
			{this.state.users.map(( users, index ) => { return (
				<li className="m-t user-card" key={index+1}>
					<img className="profile-picture" src={users.picture.large} alt={users.name.first}/>
					<details className="m-l">
						<summary>
							<h4>{users.name.first} {users.name.last}</h4>
						</summary>
						<div className="users-details">
							<small>{users.email}</small><br/>
							<small>{users.phone}</small>
						</div>
					</details>
				</li>
			)})}
			</ul>
		</div>
	)}
}

export default Rolodex