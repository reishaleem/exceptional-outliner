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

const uri = process.env.DB_URI;
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
mongoose.connect(uri, {
    auth: { user: dbUser, password: dbPassword },
    useNewUrlParser: true,
    useCreateIndex: true,
});
const connectionPool = mongoose.connection;
connectionPool.once("open", () => {
    console.log("MongoDB connection pool established");
});

const userRouter = require("./server/routes/UserRouter");

app.use("/api/users", userRouter);

app.get("/api/health", (req, res) => {
    res.send({ message: "Server is running" });
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log("server is running on port", port);
});
