const express = require('express');
const router  = express.Router();
const usersControllers = require('../controllers/users')

router.get( '/users', usersControllers.listUsers )

router.get( '/users/:id', usersControllers.showUser )

router.post( '/users', usersControllers.createUser )

router.put( '/users/:id', usersControllers.updateUser )

router.delete( '/users/:id', usersControllers.removeUser )

module.exports = router;