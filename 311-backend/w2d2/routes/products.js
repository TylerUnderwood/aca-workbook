const express = require('express');
const router  = express.Router();

const { list, show, create } = require('../controllers/products')

router.get( '/products', (req, res) => {
	res.json( list() )
})

router.get( '/products/:id', (req, res) => {
	res.json( show( req.params.id ) )
})

router.post( '/products', (req, res) => {
	res.json( create( req.body ) )
})

module.exports = router;