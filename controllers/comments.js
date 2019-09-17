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
	newComment._id = comments[ comments.length - 1 ]._id + 1;
	comments.push( newComment );
	res.json( newComment );
}

module.exports = {
	list, show, create,
}