'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activity.belongsTo(models.User, {foreignKey : 'UserId'})
    }
  };
  Activity.init({
    judul: {
      type : DataTypes.STRING,
      validate: {
        notEmpty : {
          args : true,
          msg : 'Judul harus diisi'
        }
      }
    },
    deskripsi: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Deskripsi tidak boleh kosong'
        }, 
        len : {
          args : [6],
          msg : 'Deskripsi minimal diisi 6 karakter'
        }
      }
    },
    alokasiWaktu: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Alokasi waktu harus diisi'
        }
      }
    },
    UserId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};