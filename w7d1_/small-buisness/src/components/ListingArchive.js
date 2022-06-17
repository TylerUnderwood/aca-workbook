import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { 
	Container,
	Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

class ListingsTable extends Component {

	removeListing = ( index ) => {
		let confirmation = window.confirm("Are you sure you want to delete this listing?")
		if ( confirmation ) {
			this.props.removeListing( index )
		}
	}
	
	render() {
		return (
			<Container maxWidth="md">
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Description</TableCell>
							<TableCell>Open Hours</TableCell>
							<TableCell>Address</TableCell>
							{ this.props.user.loggedIn && (
								<TableCell>Delete</TableCell>
							)}
						</TableRow>
					</TableHead>
					<TableBody>
					{ this.props.business.map( ( listing, index ) => (
						<TableRow key={listing.id}>
							<TableCell component="th" scope="row">
								{listing.id}
							</TableCell>
							<TableCell>
								<Link to={`/listing/${listing.id}`}>{listing["name"]}</Link>
							</TableCell>
							<TableCell>
								{listing["description"]}
							</TableCell>
							<TableCell>
								{listing["hours"]}
							</TableCell>
							<TableCell>
								{listing["address"]}
							</TableCell>
							{ this.props.user.loggedIn && (
								<TableCell>
									<DeleteIcon
										onClick={() => this.removeListing(index)}
										className="icon text-red" />
								</TableCell>
							)}
						</TableRow>
					))}
					</TableBody>
				</Table>
			</Container>
		)
	}
}

export default ListingsTable