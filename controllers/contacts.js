const contacts = require('../data/contacts');

const list = ( )=>
{
	return contacts
}

const show = ( id )=>
{
	let contact = contacts.find( obj => obj._id == id );
	return contact;
}

const create = ( newContact )=>
{
	newContact._id = contacts.length;
	contacts.push( newContact );
	res.json( newContact );
}

module.exports = {
	list, show, create,
}