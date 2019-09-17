const express = require('express');
const router  = express.Router();

// add the functions to be made in the controllers folder
const { list, show, create } = require('../controllers/comments')


router.get( '/comments', ( req, res ) => {
	// list() just returns the comments from data
	res.json( list( ) )
})

router.get( '/comments/:id', ( req, res ) => {
	// show() receives the searched for id and returns just that comment
	res.json( show( req.params.id ) )
})

router.post( '/comments', ( req, res ) => {
	// create() receives the reqested input and adds it to the comments in the data
	res.json( create( req.body ) )
})

module.exports = router;