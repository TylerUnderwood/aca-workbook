// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use('/', express.static('public'));
app.use( bodyParser.json() );

// ROUTES
const users = require('./routes/users');
app.use( users );

// DISPLAY
app.get('/', ( req, res ) => res.send( 'wassup' ));

// PORT
const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log('app is listening on:', port);
})