"use strict";
const models = require("../models");
const { Names } = models;
const fs = require("fs-promise");

const parseDataFiles = async (file) => {
  console.time("getting all names");
  const allNames = [];
  let namesChecked = 0;
  console.log("hello from parser");
  var files = await fs.readdir(__dirname + "/../names");
  for (const fileName of files) {
    const year = fileName.match(/\d/g).join("");
    console.log("year:", year);
    const data = await fs.readFile(__dirname + "/../names/" + fileName, {
      encoding: "utf8",
    });
    const splitted = data.split("\r\n");
    for (const o of splitted) {
      const commaSplit = o.split(",");
      if (commaSplit[0] && commaSplit[2] > 6500) {
        var nameData = {
          name: commaSplit[0],
          gender: commaSplit[1],
          year: year,
          count: commaSplit[2],
        };
        allNames.push(nameData);
      }
    }
  }
  return allNames;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const allNames = await parseDataFiles();
    console.log("allNames.length", allNames.length);
    await Names.bulkCreate(allNames, { returning: false });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Names", null, {});
  },
};
