'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnglishSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Students.hasMany(models.EnglishSection, {foreignKey: 'studentId'});
      models.EnglishSection.belongsTo(models.Students);
    }
  };
  EnglishSection.init({
    studentId: DataTypes.STRING,
    present: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'EnglishSection',
  });
  return EnglishSection;
};