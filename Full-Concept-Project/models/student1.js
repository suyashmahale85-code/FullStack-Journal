'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  student1.init({
    name: DataTypes.STRING,
    rollno: DataTypes.STRING,
    div: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'student1',
  });
  return student1;
};