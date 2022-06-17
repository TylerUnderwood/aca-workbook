// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use('/', express.static('public'));
app.use( bodyParser.json() );

// ROUTES
const commentRoute = require('./routes/comments');
const contactRoute = require('./routes/contacts');
const productRoute = require('./routes/products');
const vehicleRoute = require('./routes/vehicles');

app.use( commentRoute )
app.use( contactRoute )
app.use( productRoute )
app.use( vehicleRoute )

// PORT
const port = process.env.PORT || 4001;

app.listen(port, () => {
	console.log(`Web server is listening on port ${port}!`);
});
