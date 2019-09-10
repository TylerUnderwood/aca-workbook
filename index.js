const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4001;

const { comments } = require('./data/comments');
const { contacts } = require('./data/contacts');
const { products } = require('./data/products');
const { vehicles } = require('./data/vehicles');

app.use('/', express.static('public'));
app.use( bodyParser.json() );

app.get('/:route', (req, res) => {

	let route;

	if ( req.params.route === "comments" ) { route = comments }
	if ( req.params.route === "contacts" ) { route = contacts }
	if ( req.params.route === "products" ) { route = products }
	if ( req.params.route === "vehicles" ) { route = vehicles }

	res.json( route );
	
})

app.get('/:route/:id', (req, res) => {

	let route;

	if ( req.params.route === "comments" ) { route = comments }
	if ( req.params.route === "contacts" ) { route = contacts }
	if ( req.params.route === "products" ) { route = products }
	if ( req.params.route === "vehicles" ) { route = vehicles }

	let resObj = route.filter( e => e._id == req.params.id )[0];
	res.json( resObj );
	
})

app.post('/comments', (req, res) => {
	// Add the information from the body to the appropriate array
	// Figure out how to increment each _id by one and add this _id to "req.body"
	// Add postId: 1 to "req.body"
	// Finally.. <ARRAY>.push(req.body)

})





app.listen(port, () => {
	console.log(`Web server is listening on port ${port}!`);
});
