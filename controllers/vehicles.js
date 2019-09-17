const vehicles = require('../data/vehicles');

const list = ( )=>
{
	return vehicles
}

const show = ( id )=>
{
	let vehicle = vehicles.find( obj => obj._id == id );
	return vehicle;
}

const create = ( newVehicle )=>
{
	newVehicle._id = vehicles[ vehicles.length ]._id;
	vehicles.push( newVehicle );
	res.json( newVehicle );
}

module.exports = {
	list, show, create,
}