const Pool = require("pg").Pool;

const pool = new Pool({
  user: "whhckuulwqwrym",
  host: "ec2-34-195-169-25.compute-1.amazonaws.com",
  password: process.env.SECRET,
  port: 5432,
  database: "d39m7elofs913n",
});

module.exports = pool;
