'use strict'
/*jshint expr:true */

var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon');
var expect = chai.expect;

var Rando = require('../../../app/js/rando/model/rando');

describe('Bacbone Rando', function() {
  before(function(done) {
    this.mock = sinon.mock(Backbone);
    rando = new Rando();
    done();
  });

  it('should be a backbone object', function(done) {
    rando.set('randoBody', 'a test todo');
    expect(rando).to.be.ok;
    expect(rando.get('randoBody')).to.eql('a test todo');
    done();
  });

  it('should talk with the api on save', function(done) {
    this.mock.expects('ajax').withArgs(sinon.match({type: 'POST', url: '/api/v.0.0.1/rando'}));
    rando.save();
    done();
  });

  after(function() {
    this.mock.verify();
  });
});
