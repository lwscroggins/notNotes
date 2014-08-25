'use strict'
//models/rando.js

var mongoose = require('mongoose');

var randoSchema = mongoose.Schema({
  randoBody: String
});

module.exports = mongoose.model('Rando', randoSchema);
