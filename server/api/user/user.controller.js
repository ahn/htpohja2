'use strict';

var models = require('../../models');


exports.index = function(req, res) {
  models.User.findAll().then(function(users) {
    res.json(users);
  });
};

exports.show = function(req, res) {
  var user;
  models.User.findOne(
    {where: {username: req.params.username}}).then(function(u) {
      user = u;
      if (!user) {
        throw {status: 404};
      }
      res.json(user);

  }, function(err) {
    var status = err.status || 500;
    res.sendStatus(status);
  });
};

exports.create = function (req, res) {
  
  var username = req.body.username;
  var realname = req.body.realname;
  var password = req.body.password;
  
  if (!username || !realname || !password) {
    return res.status(400).json({'error': 'Invalid attributes'});
  }
  
  models.User.create({
    username: username,
    realname: realname,
    password: password
  }).then(function(user) {
    res.json(user);
  },
  function(err) {
    if (err.name==='SequelizeUniqueConstraintError') {
      res.status(409).json({error: "User already exists."});
    }
    else {
      console.log(err);
      res.status(500).json({error: "Database error"});
    }
    
  });

};