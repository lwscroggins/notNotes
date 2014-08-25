var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Rando = require('../models/rando');

module.exports = Backbone.Collection.extend({
  url: '/api/v.0.0.1/rando',
  model: Rando
});
