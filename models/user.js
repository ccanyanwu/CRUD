'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    full_name: DataTypes.STRING,
  
  });

  User.associate = function(models) {
    models.User.hasMany(models.Post);
  };

  return User;
};
