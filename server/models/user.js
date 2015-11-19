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
    password_hash: DataTypes.STRING,
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
      toJSON: function() {
        var u = this.get();
        return {
          username: u.username,
          realname: u.realname
        };
      },
      verifyPassword(password, callback) {
        var hashHex = this.get().password_hash;
        var hash = new Buffer(hashHex, 'hex'); 
        scrypt.verifyKdf(hash, password, callback);
      }
    },
    classMethods: {
      associate: function(models) {
        //User.hasMany(models.Message)
      }
    }
  });

  return User;
};