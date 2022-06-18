const express = require('express');
const router  = express.Router();

const { list, show, create } = require('../controllers/contacts')

router.get( '/contacts', (req, res) => {
	res.json( list() )
})

router.get( '/contacts/:id', (req, res) => {
	res.json( show( req.params.id ) )
})

router.post( '/contacts', (req, res) => {
	res.json( create( req.body ) )
})

module.exports = router;