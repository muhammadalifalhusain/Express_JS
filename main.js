const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "express_test",
});

database.connect((err) => {
    if (err) throw err;
    console.log("Koneksi database tersambung");
});

app.get("/api/v1/user", (req, res) => {
    console.log("GET API USER DI REQUEST");
    database.query("SELECT * FROM user", (err, rows) => {
        if (err) throw err;
        res.json({
            success: true,
            message: "Mendapatkan data user",
            data: rows,
        });
    });
});

app.listen(3001, () => {
    console.log("Server berjalan di port 3001");
});