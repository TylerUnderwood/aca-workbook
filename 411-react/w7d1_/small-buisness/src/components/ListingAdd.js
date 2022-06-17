import React, { Component } from 'react'
import {
	Button,
	TextField,
} from '@material-ui/core'

class ListingAdd extends Component {

	state = {
		open: false,
		id: '',
		name: '',
		description: '',
		hours: '',
		address: '',
	}

	stringToSlug = ( str ) => {
		str = str.replace(/^\s+|\s+$/g, ''); // trim
		str = str.toLowerCase();
	  
		// remove accents, swap ñ for n, etc
		var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
		var to   = "aaaaeeeeiiiioooouuuunc------";
		for (var i=0, l=from.length ; i<l ; i++) {
			str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
		}
	
		str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
			.replace(/\s+/g, '-') // collapse whitespace and replace by -
			.replace(/-+/g, '-'); // collapse dashes
	
		return str;
	}

	toggleDialog = () => this.setState({ open: !this.state.open })

	handleTextChange = ( event ) => {
		const newState = { ...this.state }
		newState[event.target.id] = event.target.value
		this.setState(newState)
	}

	handleSubmit = ( event ) => {
		event.preventDefault()
		const payload = { ...this.state }
		payload.id = this.stringToSlug( this.state.name )
		delete payload.open
		this.props.addListing( payload )
		this.setState({ open: false })
		this.props.history.push('/listings')
	}

	componentDidUpdate = ( prevProps, prevState ) => {
		if ( prevState.open !== this.state.open ) {
			this.setState({
				name: '',
				description: '',
				hours: '',
				address: '',
			})
		}
	}

	render() {
		return (
			<section className="flex">

				<div className="w-50 pad">
					<form onSubmit={this.handleSubmit}>
						<TextField 
							id="name" 
							placeholder="Name" 
							value={this.state.name} 
							onChange={this.handleTextChange} 
							required />
						<TextField 
							id="description" 
							placeholder="Description" 
							value={this.state.description} 
							onChange={this.handleTextChange} 
							required />
						<TextField 
							id="hours" 
							placeholder="Hours" 
							value={this.state.hours} 
							onChange={this.handleTextChange} 
							required />
						<TextField 
							id="address" 
							placeholder="Address" 
							value={this.state.address} 
							onChange={this.handleTextChange} 
							required />
						<br />
						<Button variant="contained" color="primary" type="submit">Submit</Button>
					</form>
				</div>
				
				<div className="w-50">
					
				</div>

			</section>
		)
	}
}

export default ListingAdd