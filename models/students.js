'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Students.hasMany(models.Attendance);
      models.Attendance.belongsTo(Students);

      Students.belongsToMany(models.Sections, {through: "Enrollment"});
      models.Sections.belongsToMany(Students, {through: "Enrollment"});
    }
  };
  Students.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    schoolID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Students;
};