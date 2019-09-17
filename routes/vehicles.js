const express = require('express');
const router  = express.Router();

const { list, show, create } = require('../controllers/vehicles')

router.get( '/vehicles', (req, res) => {
	res.json( list() )
})

router.get( '/vehicles/:id', (req, res) => {
	res.json( show( req.params.id ) )
})

router.post( '/vehicles', (req, res) => {
	res.json( create( req.body ) )
})

module.exports = router;