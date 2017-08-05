var chai = require('chai')
var chaiHttp = require('chai-http')
var should = chai.Should()

chai.use(chaiHttp)

var app = require('../app')

describe('Film API', function () {
    it('Create: status harus true jika data yang dikirim benar', function(done) {
        chai.request(app).post('/films').send({
            title: 'Suparman',
            year: 2000
        }).end(function(err, res) {
            if (err) {
                console.log('res nya: ', res);
            }
            res.should.be.json
            res.should.have.status(200)
            res.body.should.have.property('success')
            res.body.success.should.be.equal(true)
            done()
        })
    })
})
