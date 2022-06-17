const users = require('../data/users');

const listUsers = ( req, res )=>
{
	res.json( users );
}

const showUser = ( req, res )=>
{
	let user = users.find( obj => obj.id === parseInt(req.params.id) );
	res.json( user );
}

const newUser = require('../data/sampleUser');

const createUser = ( req, res )=>
{
	newUser.id = users.length + 1;
	users.push( newUser );
	res.json( newUser );
}

const updateUser = ( req, res )=>
{
	let user = users.find( obj => obj.id === parseInt(req.params.id) );
	user.id = 42;
	res.json( user );
}

const removeUser = ( req, res )=>
{
	let user = users.find( obj => obj.id === parseInt(req.params.id) );
	user.isActive = false;
	res.send( 'deleted' );
}

module.exports = { 
	listUsers, showUser, createUser, updateUser, removeUser
}