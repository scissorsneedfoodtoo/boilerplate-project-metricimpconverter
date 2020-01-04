/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       If additional tests are added, keep them at the very end
*
*
*/

const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  suite('Routing Tests', function() {
    
    suite('GET /api/convert => conversion object', function() {
      
      test('Convert 10L (valid input)', function(done) {
       chai.request(server)
        .get('/api/convert')
        .query({input: '10L'})
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit.toLowerCase(), 'l'); // Ignore case
          assert.approximately(res.body.returnNum, 2.64172, 0.1);
          assert.equal(res.body.returnUnit, 'gal');
          done();
        });
      });
      
      test('Convert 32g (invalid input unit)', function(done) {
        
        // done();
      });

      test('Convert 3a16kg', function(done) {

        // done();
      });
      
      test('Convert 1a4kkg (invalid number and unit)', function(done) {
        
        // done();
      });
      
      test('Convert kg (no number)', function(done) {
        
        // done();
      });
      
    });

  });

});
