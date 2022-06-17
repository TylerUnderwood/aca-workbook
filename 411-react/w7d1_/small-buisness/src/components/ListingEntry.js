import React from 'react'
import { 
	Container, 
	Paper,
} from '@material-ui/core';
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>

const ListingEntry = ( props ) => {

	const id = props.match.params.id
	const listing = props.business.find( item => item.id == id )

	const defaultProps = {
		center: {
			lat: Number(listing.latitude),
			lng: Number(listing.longitude),
		},
		zoom: 13
	};
	
    return (
		<Container maxWidth="sm" className="listing-container pad">
            <Paper className="listing-paper pad">
                <h2>{listing.name}</h2>
				<address>{listing.address}</address>
				<span>{listing.hours}</span>
				<p>{listing.description}</p>
            </Paper>
			<Paper className="listing-paper" style={{ height: "450px" }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
					yesIWantToUseGoogleMapApiInternals
				>
				<AnyReactComponent lat={listing.latitude} lng={listing.longitude} text={listing.name} />
				</GoogleMapReact>
			</Paper>
        </Container>
    )
}

export default ListingEntry