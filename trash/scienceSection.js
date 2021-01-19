'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScienceSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Students.hasMany(models.ScienceSection,{foreignKey: 'studentId'});
      models.ScienceSection.belongsTo(models.Students);
    }
  };
  ScienceSection.init({
    studentId: DataTypes.STRING,
    present: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'ScienceSection',
  });
  return ScienceSection;
};