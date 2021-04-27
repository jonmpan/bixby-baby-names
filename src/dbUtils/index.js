import sequelize from "sequelize";
const { Op } = sequelize;
import { Names } from "../../models";
const attributes = ["name", "year", "count", "gender"];
import { toTitleCase, isEmpty } from "../utils";

const getAllNames = async (query) => {
  const names = await Names.findAll({
    attributes,
  });
  return names;
};

const findNames = async (query) => {
  const sequelizePayload = {
    attributes,
  };
  const where = constructWhere(query);
  where ? (sequelizePayload.where = where) : null;
  const names = await Names.findAll(sequelizePayload);
  return names;
};

const findRandomName = async (query) => {
  const sequelizePayload = {
    attributes,
    order: [sequelize.literal("random()")],
  };
  const where = constructWhere(query);
  where ? (sequelizePayload.where = where) : null;
  const name = await Names.findOne(sequelizePayload);
  return name;
};

const constructWhere = (query) => {
  const { year, gender, name, letter, sort, order } = query;
  let where = {};
  year ? (where.year = year) : null;
  gender ? (where.gender = gender) : null;
  if (name) {
    where.name = { [Op.substring]: toTitleCase(query.name) };
  } else if (letter) {
    where.name = { [Op.substring]: query.letter };
  }
  if (isEmpty(where)) {
    return null;
  }
  return where;
};

export { findNames, findRandomName, getAllNames };
