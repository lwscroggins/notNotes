'use strict'
/*jshint expr:true */

var Backbone = require('backbone');
var sinon = require('sinon');

var RandoCollection = require('../../../app/collections/rando-collection');

describe('Backbone Rando Collection', function () {
  var randoCollection;
  before(function(done) {
    this.mock = sinon.mock(Backbone);
    randoCollection = new RandoCollection();
    done();
  });

  it('should talk with the api on a fetch', function(done) {
    this.mock.expects('ajax').withArgs(sinon.match({type: 'GET', url: '/api/v.0.0.1/rando'}));
    randoCollection.fetch();
    done();
  });

  after(function() {
    this.mock.verify();
  });
});
