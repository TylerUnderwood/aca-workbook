import React from 'react'
import { Link } from 'react-router-dom'
import { 
	Container,
	Card, 
	CardContent, 
	CardActions, 
	Divider, 
	Typography 
} from '@material-ui/core'


const Home = () => {
    return (
		<Container maxWidth="md">
			<div className="card-container">
				<Card className="card">
					<CardContent className="text-gray">
						<Typography variant="h5">See All Listings</Typography>
					</CardContent>
					<Divider />
					<CardActions style={{ color: 'mediumblue' }}>
						<Link to={`/listings`}>Listings</Link>
					</CardActions>
				</Card>

				<Card className="card">
					<CardContent className="text-gray">
						<Typography variant="h5">Login to Add Listings</Typography>
					</CardContent>
					<Divider />
					<CardActions style={{ color: 'mediumblue' }}>
						<Link to={`/login`}>Login</Link>
					</CardActions>
				</Card>
			</div>
		</Container>
    )
}

export default Home