var express = require('express')

var filmController = require('../controllers/film')

var router = express.Router()

//read crud
router.get('/', filmController.index)

//create crud
router.post('/', filmController.create)

//delete crud
router.delete('/:filmId', filmController.destroy)

module.exports = router
