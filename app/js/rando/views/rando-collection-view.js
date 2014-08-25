'use strict'
//rando collection view

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Rando = require('../models/rando');
var RandoCollection = require('../collections/rando-collection');
var RandoView = require('../views/rando-view');

module.exports = Backbone.View.extend ({
  tagName: 'div',

  initialize: function() {
    this.collection.on('add', this.addRando, this);
    this.collection.on('reset', this.addAll, this);
    this.render();
  },

  addRando: function() {
    var randoView = new RandoView({model: rando});
    this.$('#randocollection').append(randoView.$el);
  },

  addAll: function() {
    this.$('#randocollection').html('');
    this.collection.forEach(this.addRando);
  },

  render: function() {
    var template = require('../templates/rando-collection.hbs')
    this.$el.html(template());
    this.addAll();
    return this;
  }
});
