import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { access } from "fs";
import jwt from "jsonwebtoken";
import { LoginRequest } from "../common/types";
import Users from "../models/user.model";

interface AccessTokenPayload {
    id: string;
    name: string;
    email: string;
    penName: string;
}

async function login(request: LoginRequest, res: Response) {
    const email = request.email;

    const users = await Users.find({ email: email }).exec();
    if (!users || !users[0]) {
        throw new Error("Email or password is incorrect");
    }
    const user = users[0];

    let passwordMatches = null;
    try {
        passwordMatches = await verifyPassword(request.password, user.password);
    } catch (error) {
        throw new Error("Email or password is incorrect");
    }

    if (passwordMatches) {
        const userDetails = {
            id: user._id,
            name: user.name,
            email: user.email,
            penName: user.penName,
            bio: user.bio,
        };
        const accessToken = generateToken(
            userDetails,
            process.env.JWT_SECRET!,
            {
                expiresIn: "2m",
            }
        );
        const refreshToken = generateToken(
            userDetails,
            process.env.REFRESH_JWT_SECRET!,
            {
                expiresIn: "7d",
            }
        );

        res.cookie("rjid", refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 3600000,
        });

        return {
            accessToken: accessToken,
        };
    } else {
        throw new Error("Email or password is incorrect");
    }
}

async function verifyPassword(password1: string, password2: string) {
    try {
        return await bcrypt.compare(password1, password2);
    } catch (error) {
        throw error;
    }
}

function generateToken(
    payload: AccessTokenPayload,
    secret: string,
    ...rest: any
) {
    return jwt.sign(payload, secret, ...rest);
}

async function refreshToken(req: Request, res: Response) {
    const token = req.cookies.rjid;
    if (!token) {
        return res.send({ ok: false, accessToken: "" }); // don't send an access token
    }

    let payload: any = null;
    try {
        payload = jwt.verify(token, process.env.REFRESH_JWT_SECRET!);
    } catch (error) {
        return res.send({ ok: false, accessToken: "" });
    }

    const user = await Users.findById(payload.id);
    if (!user) {
        return res.send({ ok: false, accessToken: "" });
    }

    const userDetails = {
        id: user._id,
        name: user.name,
        email: user.email,
        penName: user.penName,
        bio: user.bio,
    };
    const newAccessToken = generateToken(userDetails, process.env.JWT_SECRET!, {
        expiresIn: "2m",
    });
    const refreshToken = generateToken(
        userDetails,
        process.env.REFRESH_JWT_SECRET!,
        {
            expiresIn: "7d",
        }
    );

    res.cookie("rjid", refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 3600000,
    });
    return res.send({ ok: true, accessToken: newAccessToken });
}

// later, define a context type somewhere
function authenticateToken(context: any) {
    const authorization = context.req.headers["authorization"];
    if (!authorization) {
        throw new Error("Invalid token. Try logging in again.");
    }
    try {
        const token = authorization.split(" ")[1]; // second value after the bearer
        const user = jwt.verify(token, process.env.JWT_SECRET!);
        context.user = user as any;
        return;
    } catch (error) {
        throw new Error("Invalid token. Try logging in again");
    }
}

async function encryptPassword(password: string) {
    return await bcrypt.hash(password, 10);
}

export default {
    login,
    generateToken,
    authenticateToken,
    encryptPassword,
    refreshToken,
    verifyPassword,
};
