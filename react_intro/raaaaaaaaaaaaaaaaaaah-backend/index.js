const express = require('express');
const cors = require('cors');
const app = express('');
const mongoose = require('mongoose');

const userRoute = require ('./routes/setUsers');

app.use(express.json());
mongoose.connect ("mongodb+srv://ahmadmurtazazahid:jeglikerfemboys123@rah.ines0tv.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "rah"
})

.then(console.log("connected"))
.catch((err) => console.log(err));

app.use(
    cors()
);

app.use("/user", userRoute);

app.listen("5000", () => {
    console.log("Server running on port 5000");
})