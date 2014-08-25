'use strict'
//Backbone Rando model

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Rando = Backbone.Model.extend({
  url: '/api/v.0.0.1/rando',
  idAttribute: '_id',
  defaults: {
    randoBody: 'enter a todo item'
  }
});

module.exports = Rando;
