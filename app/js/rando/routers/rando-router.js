'use strict'
//rando-router

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Rando = require('../models/rando');
var RandoView = require('../views/rando-view');
var RandoFormView = require('../views/rando-form-view');
var RandoCollection = require('../collections/rando-collection');
var RandoCollectionView = require('../views/rando-collection-view');

module.exports = Backbone.Router.extend({
  routes: {
    "rando": "index",
    "rando/new": "create",
    "rando/:id": "singleRando"
  },

  index: function() {
    this.rando = new RandoCollection();
    this.rando.fetch();
    var self = this;
    this.randoView = new RandoCollectionView({collection: self.rando});
    $('#content').html(self.randoView.$el);
  },

  create: function() {
    var newRando = new Rando();
    var formView = new RandoFormView({model: newRando});
    $('#content').html(formView.el);
  },

  singleRando: function(id) {
    console.log(id);
    var rando = new Rando({id: id});
    var randoView = new RandoView({model: rando});
    rando.fetch({}, {
      success: function() {
        console.log('success!');
      },
      error: function() {
        console.log('fail!');
      }
    }).done(function() {
      console.log('done!');
    });
    $('#content').html(randoView.el);
  }
});
