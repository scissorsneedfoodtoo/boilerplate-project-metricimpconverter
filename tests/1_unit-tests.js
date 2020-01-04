/*
*
*
*       FILL IN EACH Unit TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       If additional tests are added, keep them at the very end
*
*
*/

const chai = require('chai');
const assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

suite('Unit Tests', function() {

  suite('Function convertHandler.getNum(input)', function() {

    test('Whole number input', function(done) {
      const input = '32L';
      assert.strictEqual(Number(convertHandler.getNum(input)), 32);
      done();
    });

    test('Decimal Input', function(done) {

      // done();
    });

    test('Fractional Input', function(done) {

      // done();
    });

    test('Fractional Input w/ Decimal', function(done) {

      // done();
    });

    test('No Numerical Input', function(done) {

      // done();
    });

  });

  suite('Function convertHandler.getUnit(input)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];

      input.forEach((ele) => {
        // assert
      });
      done();
    });

    test('Unknown Unit Input', function(done) {

      // done();
    });

  });

  suite('Function convertHandler.getReturnUnit(initUnit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach((ele, i) => {
        assert.strictEqual(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });

  });

  suite('Function convertHandler.spellOutUnit(unit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      // See example above for a hint
      done();
    });

  });

  suite('Function convertHandler.convert(num, unit)', function() {

    test('Gal to L', function(done) {
      const input = [5, 'gal'];
      const expected = 18.9271;

      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); // 0.1 tolerance
      done();
    });

    test('L to Gal', function(done) {

      // done();
    });

    test('Mi to Km', function(done) {

      // done();
    });

    test('Km to Mi', function(done) {

      // done();
    });

    test('Lbs to Kg', function(done) {

      // done();
    });

    test('Kg to Lbs', function(done) {

      // done();
    });

  });

});
