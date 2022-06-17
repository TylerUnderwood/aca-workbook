const products = require('../data/products');

const list = ( )=>
{
	return products
}

const show = ( id )=>
{
	let product = products.find( obj => obj._id == id );
	return product;
}

const create = ( newProduct )=>
{
	newProduct._id = products.length;
	products.push( newProduct );
	res.json( newProduct );
}

module.exports = {
	list, show, create,
}