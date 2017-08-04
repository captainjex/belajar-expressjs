var chai = require('chai')
var should = chai.Should()

var fizzBuzzTest = require('../helpers/fizzbuzz')

describe('FizzBuzz Test', function() {
    it('if multiples of 3, print Fizz', function () {
        fizzBuzzTest.fizzBuzz(3).should.equal('Fizz')
    })

    it('if multiples of 5, print Buzz', function () {
        fizzBuzzTest.fizzBuzz(5).should.equal('Buzz')
    })

    it('if multiples of 3x5, print FizzBuzz', function () {
        fizzBuzzTest.fizzBuzz(15).should.equal('FizzBuzz')
    })

    it('if not multiples of three should not print Fizz', function () {
        fizzBuzzTest.fizzBuzz(4).should.not.equal('Fizz')
    })
})
