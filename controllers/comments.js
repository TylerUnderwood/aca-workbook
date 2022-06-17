const comments = require('../data/comments');

const list = ( )=>
{
	return comments
}

const show = ( id )=>
{
	let comment = comments.find( obj => obj._id == id );
	return comment;
}

const create = ( newComment )=>
{
	newComment._id = comments.length;
	comments.push( newComment );
	res.json( newComment );
}

module.exports = {
	list, show, create,
}