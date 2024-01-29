const express = require("express")//yalla
const mysql = require("mysql2");
const fs = require("fs");

const dbConfig = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "passord",
    database: "test",
};





const pool = mysql.createPool(dbConfig);

const PORT = 6969;

const app = express();

app.get("/", (req, res) => {
    fs.readFile("./index.html", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.get("/elev", (req, res) => {
    pool.query("SELECT * FROM elev WHERE ElevID = ?", [Number(req.query.id)], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
})

app.listen(PORT, () => {
    console.log("real", PORT)
})