'use strict'
/*jshint expr:true */

var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon');
var expect = chai.expect;

var RandoView = ('../../../app/js/rando/views/rando-view');

describe('Backbone Rando View', function() {
  before(function(done) {
    sinon.spy(RandoView.prototype, 'render');
    done();
  });

  it('should call render on creation', function(done) {
    this.RandoView = new RandoView({model: Backbone.Model.extend({})});
    expect(RandoView.prototype.render.called).to.be.true;
    done();
  });

  it('should not be empty', function(done) {
    expect(this.randoView.$el).to.not.eql('');
    done();
  });

  after(function(done) {
    RandoView.prototype.render.restore();
    done();
  });
});
