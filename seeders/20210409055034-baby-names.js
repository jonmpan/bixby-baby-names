"use strict";
const models = require("../models");
const { parseDataFiles } = require("../src/utils");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const allNameData = await parseDataFiles();
    console.log("allNameData.length", allNameData.length);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
