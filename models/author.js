'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    author_first_name: DataTypes.STRING,
    author_last_name: DataTypes.STRING/*,
    username: DataTypes.STRING,
    role: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
    }},*/
  });

  return Author;
};
 