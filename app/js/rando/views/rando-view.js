'use strict'
//rando-view

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $

var RandoView = Backbone.View.extend({
  tagName: 'div',
  initialize: function() {
    this.model.bind('change', this.render, this);
    this.render();
  },

  render: function() {
    var template = require('../templates/basic-todo-template.hbs');
    var data = this.model.attributes;
    this.$el.html(template(data));
    return this;
  }
});

module.exports = RandoView;
