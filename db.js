const Pool = require("pg").Pool;

const pool = new Pool({
  user: "asiaellis",
  host: "localhost",
  port: 5432,
  database: "pocket_positivity",
});

module.exports = pool;
