import { Router } from "express";
import path from "path";
import { findNames, findRandomName } from "../dbUtils";

// API needs to answer the following questions
// names for boys/girls
// names from year 1999
// names that start with J
// popular names from 2019 (WORK IN PROGRESS)
// tell about the name Jonathan
// boy names from 2019 that start with J
// random name starting with J from 2019

export default ({ config, db, passport }) => {
  let api = Router();

  api.get("/", async (req, res) => {
    console.log("req.query", req.query);
    const names = await findNames(req.query);
    res.status(200).json({ count: names?.length || 0, names });
  });

  api.get("/random", async (req, res) => {
    console.log("req.query", req.query);
    const names = await findRandomName(req.query);
    res.status(200).json({ count: names?.length || 0, names });
  });

  return api;
};
