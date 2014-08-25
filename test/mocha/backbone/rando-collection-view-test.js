'use strict'
/*jshint expr: true */

var chai = require('chai');
var sinon = require('sinon');
var expect = require('expect');

var Rando = require('../../../app/js/rando/models/rando');
var RandoCollectionView = require('../../../app/js/rando/views/rando-collection-view');
var RandoCollection = require('../../../app/js/rando/collections/rando-collection');

describe('Backbone RandoCollectionsView', function() {
  before(function() {
    sinon.spy(RandoCollectionsView.prototype, 'render');
    sinon.spy(RandoCollectionsView.prototype, 'addAll');
    sinon.spy(RandoCollectionsView.prototype, 'addRando');
    this.collection = new RandoCollection();
    this.view = new RandoCollectionsView({collection: this.collection});
  });

  it('should have called render on creation', function(done) {
    expect(RandoCollectionsView.prototype.render.called).to.be.true;
    done();
  });

  it('should call addAll on a reset', function(done) {
    this.collection.reset();
    expect(RandoCollectionsView.prototype.addAll.calledTwice).to.be.true;
    done();
  });

  it('should call addRando', function(done) {
    this.collection.add(new Rando());
    expect(RandoCollectionsView.prototype.addRando.called).to.be.true;
    done();
  });

  it('should not have a blank $el', function(done) {
    expect(this.view.el).to.not.eql('');
    done();
  });

  after(function() {
    RandoCollectionsView.prototype.render.restore();
    RandoCollectionsView.prototype.addAll.restore();
    RandoCollectionsView.prototype.addRando.restore();
  });
});
