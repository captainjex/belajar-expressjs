var Film = require('../models/film')

module.exports = {
    create: function (req, res) {
        console.log('isi requestnya: ', req.body);
        var result = {
            success: false
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
                result.success = true
            }

            res.json(result)
        })
    },
    index: function (req, res) {
        Film.find({}, function (err, films) {
            if(err){
                res.json(err)
            }
            res.json(films)
        })
    },
    destroy: function (req, res) {
        console.log('mau ndelet', req.params.filmId);

        Film.findByIdAndRemove(req.params.filmId, function (err) {
            if(err){

            }
            res.json({
                msg: 'terhapus'
            })
        })
    }
}
