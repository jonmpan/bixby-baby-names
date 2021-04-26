import { Router } from "express";
import path from "path";
import { findNames } from "../dbUtils";

export default ({ config, db, passport }) => {
  let api = Router();

  api.get("/", async (req, res) => {
    console.log("req.query", req.query);
    const names = await findNames(req.query);
    res.status(200).json({ count: names.length, names });
  });

  return api;
};
