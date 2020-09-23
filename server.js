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
const localURI = "mongodb://localhost:27017/exceptional-outliner_test";
mongoose.connect(localURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
});
const connectionPool = mongoose.connection;
connectionPool.once("open", () => {
    console.log("MongoDB connection pool established");
});

const userRouter = require("./server/routes/UserRouter");
const universeRouter = require("./server/routes/UniverseRouter");
const wikiRouter = require("./server/routes/WikiRouter");

app.use("/api/users", userRouter);
app.use("/api/universes", universeRouter);
app.use("/api/wikis", wikiRouter);

app.get("/api/health", (req, res) => {
    res.send({ message: "Server is running" });
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "app", "build", "index.html"));
});

app.listen(port, () => {
    console.log("server is running on port", port);
});
