const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// USERS

app.post("/users", async (req, res) => {
  try {
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING * ",
      [username, email, password]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users;");

    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log(`server has started on port 5000`);
});
