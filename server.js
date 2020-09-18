const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "app/build")));

app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connectionPool = mongoose.connection;
connectionPool.once("open", () => {
    console.log("MongoDB connection pool established");
});

const userRouter = require("./server/routes/UserRouter");

app.use("/users", userRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "app/build", "index.html"));
});

app.listen(port, () => {
    console.log("server is running on port", port);
});
