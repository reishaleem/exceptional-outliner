import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { graphqlHTTP } from "express-graphql";
import schema from "./server/graphql/schema";
import dotenv from "dotenv";

import authService from "./server/services/auth.service";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "../../app", "build")));

app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json());
app.use("/refresh-token", cookieParser());

const mongoURI =
    process.env.MONGO_URI || "mongodb://localhost:27017/outliner_test_db";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
});
const connectionPool = mongoose.connection;
connectionPool.once("open", () => {
    console.log("MongoDB connection pool established");
});

// for revoking refresh tokens, go back to the tutorial later when setting up forgot password.
app.post("/refresh-token", async (req, res) => {
    return authService.refreshToken(req, res);
});

app.use(
    "/graphql",
    graphqlHTTP((req, res) => {
        return {
            schema: schema,
            graphiql: true,
            context: { req, res },
        };
    })
);

// not sure why I can't set req and res to Request and Response...will need to update it later...
app.get("/*", (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, "../../app", "build", "index.html"));
});

app.listen(port, () => {
    console.log("server is running on port", port);
});
