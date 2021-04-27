import "dotenv/config";
import http from "http";
import express from "express";
import utils from "./utils/index.js";
import config from "./config.json";
import db from "../models";
import sequelize from "sequelize";
import names from "./api/names";
import "core-js/stable";
import "regenerator-runtime/runtime";

const app = express();
app.server = http.createServer(app);

app.use("/names", names({ config, db }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || config.port, () => {
  var port = process.env.PORT || config.port;
  console.log(`Listening at http://localhost:` + port);
});

// console.log("Hello Node.js project.");
// console.log(process.env.MY_SECRET);

// utils.parseDataFiles();

// pg_dump -Fc --no-acl --no-owner -h localhost -U postgres babynames > babynames.dump
// s3://jonmpannewbucket/babynames.dump
// heroku pg:backups:restore s3://jonmpannewbucket/babynames.dump DATABASE_URL
