import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { graphqlHTTP } from "express-graphql";
import schema from "./server/graphql/schema";
import dotenv from "dotenv";
import { sign, verify } from "jsonwebtoken";
import User from "./server/models/user.model";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "app", "build")));

app.use(cors());
app.use(express.json());
app.use(cookieParser());

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

// only while testing. once we hook up the front end we won't need to manually hard code the header
app.use((req, res, next) => {
    req.headers.authorization =
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTg0Yjg3NDljMmM2MmI1YTQ4YjMxYyIsIm5hbWUiOiJSZWlzIiwiZW1haWwiOiJyZWlzaGFsZWVtQGdtYWlsLmNvbSIsInBlbk5hbWUiOiJyZWlzaGFsZWVtQGdtYWlsLmNvbSIsImlhdCI6MTYwNTM4MDg3MCwiZXhwIjoxNjA1MzgwOTkwfQ.RiFsWWN1HCob-oTpooSHKg-3dj7B4XxCleTs0r6JSaU";
    next();
});

app.post("/refresh-token", async (req, res) => {
    const token = req.cookies.rjid;
    if (!token) {
        return res.send({ ok: false, accessToken: "" }); // don't send an access token
    }

    let payload: any = null;
    try {
        payload = verify(token, process.env.REFRESH_JWT_SECRET!);
    } catch (error) {
        console.log(error);
        return res.send({ ok: false, accessToken: "" }); // don't send an access token
    }

    const user = await User.findById(payload.id);
    if (!user) {
        return res.send({ ok: false, accessToken: "" }); // don't send an access token
    }
    const accessTokenSecret = process.env.JWT_SECRET;
    const userDetails = {
        id: user._id,
        name: user.name,
        email: user.email,
        penName: user.penName,
    };
    const newAccessToken = sign(userDetails, accessTokenSecret!, {
        expiresIn: "2m",
    });

    const refreshTokenSecret = process.env.REFRESH_JWT_SECRET;
    const refreshToken = sign(userDetails, refreshTokenSecret!, {
        expiresIn: "7d",
    });
    // rjid means refresh jwt id
    res.cookie("rjid", refreshToken, {
        httpOnly: true,
    });
    return res.send({ ok: true, accessToken: newAccessToken }); // don't send an access token
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

/* No longer using these since we have graphql now
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
*/

// not sure why I can't set req and res to Request and Response...will need to update it later...
app.get("/*", (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, "app", "build", "index.html"));
});

app.listen(port, () => {
    console.log("server is running on port", port);
});
