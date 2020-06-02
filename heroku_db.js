const Pool = require("pg").Pool;

const pool = new Pool({
  user: "nlindowrieebgu",
  host: "ec2-52-7-39-178.compute-1.amazonaws.com",
  password: process.env.SECRET,
  port: 5432,
  database: "dfkojka2mlteeu",
});

module.exports = pool;
