const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "app", "build")));

app.use(cors());
app.use(express.json());

//const atlasURI = process.env.ATLAS_URI;
const localURI = "mongodb://localhost:27017/outliner_test_db";
mongoose.connect(localURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
});
const connectionPool = mongoose.connection;
connectionPool.once("open", () => {
    console.log("MongoDB connection pool established");
});

const userRouter = require("./server/routes/user.router");
const universeRouter = require("./server/routes/universe.router");
// const wikiRouter = require("./old/server/routes/WikiRouter");
const authenticationRouter = require("./server/routes/auth.router");

app.use("/api/users", userRouter);
app.use("/api/universes", universeRouter);
// app.use("/api/wikis", wikiRouter);
app.use("/api/auth", authenticationRouter);

app.get("/api/health", (req, res) => {
    res.send({ message: "Server is running" });
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "app", "build", "index.html"));
});

app.listen(port, () => {
    console.log("server is running on port", port);
});
