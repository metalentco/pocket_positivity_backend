const Pool = require("pg").Pool;

const pool = new Pool({
  user: "hotutuuzhahype",
  host: "ec2-52-70-15-120.compute-1.amazonaws.com",
  password: process.env.SECRET,
  port: 5432,
  database: "d8k6m96qtem9pq",
});

module.exports = pool;
