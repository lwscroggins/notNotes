require('../../../server');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

describe('randoRoutes', function() {
  var id;

  it('creates a new todo', function(done) {
    chai.request('http://localhost:3000')
        .post('/api/v.0.0.1/rando')
        .req(function(req) {
          req.send("randoBody": "enter a todo item");
        })
        .res(function(res) {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('_id');
          expect(res.body.randoBody).to.eql('enter a todo item');
          id = res.body._id
          done();
        });
    }
  });

  it('should be able to get', function(done) {
    chai.request('http://localhost:3000')
        .get('/api/v.0.0.1/rando')
        .res(function(res) {
          expect(res).to.have.status(200);
          expect(Array.isArray(res.body).to.be.true)
          expect(res.body[0]).to.have.property('randoBody');
          done();
        });
  });

  it('gets a single todo', function(done) {
    chai.request('http://localhost:3000')
        .get('/api/v.0.0.1/rando')
        .res(function(res) {
          expect(res).to.have.status(200);
          expect(res.body.randoBody).to.eql('enter a todo item')
          expect(res.body._id).to.eql(id);
          done();
        });
  });

  it('updates a single todo', function(done) {
    chai.request('http://localhost:3000')
        .put('/api/v.0.0.1/rando')
        .req(function(req) {
          req.send({'randoBody': 'an updated todo'});
        })
        .res(function(res) {
          expect(res).to.have.status(200);
          expect(res.body.randoBody).to.eql('an updated todo');
          done();
        });
  });

  it('deletes a todo', function(done) {
    chai.request('http://localhost:3000')
        .del('/api/v.0.0.1/rando')
        .res(function(res) {
          expect(res).to.have.status(200);
          expect(res.body.msg).to.eql('deleted');
          done();
        });
  });
});
