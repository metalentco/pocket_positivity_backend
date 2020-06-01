const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const port = process.env.PORT || 5000;

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

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.messsage);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;

    const updateUser = await pool.query(
      "UPDATE users SET (username, email, password) = ($1, $2, $3) WHERE user_id = $4",
      [username, email, password, id]
    );

    res.json("User was updated");
  } catch (err) {
    console.error(err.messsage);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE user_id= $1", [
      id,
    ]);

    res.json("User was deleted");
  } catch (error) {
    console.error(error);
  }
});

// MANTRAS

app.post("/mantras", async (req, res) => {
  try {
    const { mantra } = req.body;
    const newMantra = await pool.query(
      "INSERT INTO mantras (mantra) VALUES ($1) RETURNING * ",
      [mantra]
    );
    res.json(newMantra.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/mantras", async (req, res) => {
  try {
    const allMantras = await pool.query("SELECT * FROM mantras;");

    res.json(allMantras.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/mantras/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mantra = await pool.query(
      "SELECT * FROM mantras WHERE mantra_id = $1",
      [id]
    );

    res.json(mantra.rows[0]);
  } catch (err) {
    console.error(err.messsage);
  }
});

app.put("/mantras/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { mantra } = req.body;

    const updateMantra = await pool.query(
      "UPDATE mantras SET mantra = $1 WHERE mantra_id = $2",
      [mantra, id]
    );

    res.json("Mantra was updated");
  } catch (err) {
    console.error(err.messsage);
  }
});

app.delete("/mantras/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query(
      "DELETE FROM mantras WHERE mantra_id= $1",
      [id]
    );

    res.json("Mantra was deleted");
  } catch (error) {
    console.error(error);
  }
});

// SCORE

app.post("/scores/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const { score } = req.body;
    const newScore = await pool.query(
      "INSERT INTO scores (score, user_id_fk) VALUES ($1, $2) RETURNING * ",
      [score, user_id]
    );
    res.json(newScore.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/scores/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const allScores = await pool.query(
      "SELECT * FROM scores WHERE user_id_fk = $1;",
      [user_id]
    );

    res.json(allScores.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/scores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { score } = req.body;

    const updateMantra = await pool.query(
      "UPDATE scores SET score = $1 WHERE score_id = $2",
      [score, id]
    );

    res.json("Score was updated");
  } catch (err) {
    console.error(err.messsage);
  }
});

app.delete("/scores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query(
      "DELETE FROM scores WHERE score_id= $1",
      [id]
    );

    res.json("Score was deleted");
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`server has started on port 5000`);
});
