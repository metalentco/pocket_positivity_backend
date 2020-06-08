# Pocket Positivity Backend

This is the Node.js / Express.js and PostgreSQL backend server & database for the **Pocket Positivity** app. It runs a RESTful API pointing to [**this**](https://help-for-heroes.herokuapp.com/) that the app uses to access and store data from the aplication. The Frontend of the app can be found at [**this repo**](https://github.com/davidpaps/pocket_positivity_hackathon).

---

## How to run

The server and database is hosted [**here**](https://help-for-heroes.herokuapp.com/)

To run locally, clone this repo and make sure you have PostgreSQL and Node.js installed on your machine. in the command line type:

```
npm install
```

This will install the dependencies needed. You will then need to set up the database and tables necessary for the **Pocket Positivity** app to run. To open up PostgreSQL, type in the command line:

```
psql
```

From here you can create the Database and tables you will need to run the application. Open the [**database.sql**](database.sql) file and copy the `CREATE DATABASE` command to make the database into the psql command line. Once created, type into the psql command line:

```
\c pocket_positivity;
```

This will access the database. Then You will then be able to create the tables and columns necessary for the application to run and the data to be stored. Copy the remaining `CREATE TABLE` commands to create the tables necessary for the app.

The server can then be launched by typing in the command line"

```
npm start
```

---
