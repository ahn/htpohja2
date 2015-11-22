"use strict";

var scrypt = require('scrypt');


module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      identifier: true,
      unique: true
    },
    realname: DataTypes.STRING,
    password_hash: {
      type: DataTypes.STRING,
      get: function() {
        // TODO how to completely hide the key too?
        return null;
      }
    },
    password: {
      type: DataTypes.VIRTUAL,
      set: function(val) {
        var hash = scrypt.kdfSync(val, scrypt.paramsSync(0.1));
        var hashHex = hash.toString('hex');
        this.setDataValue('password_hash', hashHex);
      }
    }
  },
  {
    instanceMethods: {
      verifyPassword(password, callback) {
        var hashHex = this.getDataValue('password_hash');
        var hash = new Buffer(hashHex, 'hex'); 
        scrypt.verifyKdf(hash, password, callback);
      }
    },
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return User;
};