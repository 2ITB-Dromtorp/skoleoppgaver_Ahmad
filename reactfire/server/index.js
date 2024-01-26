const express = require("express");

const app = express();

app.use(express.static("build"));

const port = process.env.PORT || 8080;

app.listen(port, () => {
    /*
    app.get("/api/test", (req, res) => {
        res.status(200).send("test");
    });
    */
   //alle APIer skal OVER denne kommentaren
    app.get("*", (req, res) => {
        res.sendFile("./build/index.html");
    });
});