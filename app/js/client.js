var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var RandoRouter = require('./rando/routers/rando-router');
var randoRouter = new RandoRouter();

Backbone.history.start();
randoRouter.navigate("rando", {trigger: true});
