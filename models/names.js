"use strict";
module.exports = (sequelize, DataTypes) => {
  const Names = sequelize.define(
    "Names",
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      year: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
    },
    {}
  );
  return Names;
};
