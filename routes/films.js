var express = require('express')

var Film = require('../models/film')

var router = express.Router()

//read crud
router.get('/', function (req, res) {
    Film.find({}, function (err, films) {
        if(err){
            res.json(err)
        }
        res.json(films)
    })
})

//create crud
router.post('/', function (req, res) {
    console.log('isi requestnya: ', req.body);
    var result = {
        msg: 'gagal'
    }

    var film = new Film({
        title : req.body.title,
        year : req.body.year
    })

    film.save(function(err){
        if(err){
            result.msg = err
        }else {
            result.msg = 'Hore! Berhasil'
        }

        res.json(result)
    })
})

//delete crud
router.delete('/:filmId', function (req, res) {
    console.log('mau ndelet', req.params.filmId);

    Film.findByIdAndRemove(req.params.filmId, function (err) {
        if(err){

        }
        res.json({
            msg: 'terhapus'
        })
    })
})

module.exports = router
