'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Sections.hasMany(models.Attendance);
      models.Attendance.belongsTo(models.Sections);
    }
  };
  Sections.init({
    SectionName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sections',
  });
  return Sections;
};