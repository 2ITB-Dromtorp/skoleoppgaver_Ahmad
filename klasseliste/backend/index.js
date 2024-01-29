const http = require("http");
const express = require("express");

const app = express();

const httpServer = http.createServer(app);

httpServer.listen("8080", "127.0.0.1", () => {
    console.log("server startet");
})

app.get("/getdata", (req, res) => {
    res.send({
        
    })
})