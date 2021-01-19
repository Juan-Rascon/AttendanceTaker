'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('helpers/enrollment.json');
let enrollment = JSON.parse(rawdata);

const updatedList = enrollment.map(stu => {return ({...stu, createdAt: new Date (), updatedAt: new Date() })});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Enrollment', updatedList, {});
    },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
