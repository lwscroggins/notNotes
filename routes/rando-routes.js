'use strict'
//routes/rando-routes

var Rando = require('../models/rando');

module.exports = function(app) {
  var baseUrl = '/api/v.0.0.1/rando';

  app.get(baseUrl, function(req, res) {
    Rando.find({}, function(err, rando) {
      if (err) return res.status(500).json(err);
      return res.json(rando);
    });
  });

  app.post(baseUrl, function(req, res) {
    var rando = new Rando(req.body);
    rando.save(function(err, resRando) {
      if (err) return res.status(500).json(err);
      return res.send(resRando);
    });
  });

  app.get(baseUrl + '/:id', function(req, res) {
    Rando.findOne({'_id': req.params.id}, function(err, rando){
      if (err) return res.status(500).json(err);
      return res.json(rando);
    });
  });

  app.put(baseUrl + '/:id', function(req, res) {
    var rando = req.body;
    delete rando._id;
    Rando.findOneAndUpdate({'_id': req.params.id}, rando, function(err, resRando) {
      if (err) return res.status(500).json(err);
      return res.status(202).json(resRando);
    });
  });

  app.delete(baseUrl + '/:id', function(req, res) {
    Rando.remove({'_id': req.params.id}, function(err, resRando) {
      if (err) return res.status(500).json(err);
      return res.status(200).json({'msg': 'deleted'});
    });
  });
};
