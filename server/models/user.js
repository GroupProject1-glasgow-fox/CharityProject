'use strict';

const { generatePass } = require('../helper/bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Activity, {foreignKey: 'UserId'})
    }
  };
  User.init({
    email: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Email must be filled'
        },
        isEmail : {
          args : true,
          msg : 'Must Be Email Format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Password must be filled'
        }, 
        len : {
          args : [6],
          msg : "password minimum 6 characters"
        }
      }
    }
  }, {
    hooks : {
      beforeCreate : (user, option) => {
        user.password = generatePass(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};