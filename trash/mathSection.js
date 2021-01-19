'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MathSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        models.Students.hasMany(models.MathSection, {foreignKey: 'studentId'});
        models.MathSection.belongsTo(models.Students);
    }
  };
  MathSection.init({
    studentId: DataTypes.STRING,
    present: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'MathSection',
  });
  return MathSection;
};