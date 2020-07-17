'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class registeredEvents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  registeredEvents.init({
    eventName: DataTypes.STRING,
    eventCount: {
      type:DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'registeredEvents',
  });
  return registeredEvents;
};