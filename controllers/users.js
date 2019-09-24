const users = require('../data/users');

const listUsers = ( )=>
{
	return users
}

const showUser = ( id )=>
{
	let user = users.find( obj => obj._id == id );
	return user;
}

const createUser = ( newUser )=>
{
	newUser._id = users.length;
	users.push( newUser );
	res.json( newUser );
}

module.exports = {
	listUsers, showUser, createUser,
}