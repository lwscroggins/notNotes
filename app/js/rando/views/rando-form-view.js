'use strict'
//rando-form-view

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  events: {
    "Do It!": "save"
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var template = require('../templates/rando-form.hbs');
    var data = this.model.attributes;
    this.$el.html(template(data));
    return this;
  },

  save: function(e) {
    e.preventDefault;
    var newRandoBody = this.$('input[name-randoBody]').val();
    this.model.save({randoBody: newRandoBody}, {
      success: function() {
        Backbone.history.navigate("rando", {trigger: true});
      },
      error: function() {
        console.log('error saving note!');
      }
    });
  }
});
