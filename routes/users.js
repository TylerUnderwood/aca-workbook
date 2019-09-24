const express = require('express');
const router  = express.Router();

// add the functions to be made in the controllers folder
const { listUsers, showUser, createUser } = require('../controllers/users')


router.get( '/users', ( req, res ) => {
	// list() just returns the users from data
	res.json( listUsers( ) )
})

router.get( '/users/:id', ( req, res ) => {
	// show() receives the searched for id and returns just that comment
	res.json( showUser( req.params.id ) )
})

router.post( '/users', ( req, res ) => {
	// create() receives the reqested input and adds it to the users in the data
	res.json( createUser( req.body ) )
})

module.exports = router;