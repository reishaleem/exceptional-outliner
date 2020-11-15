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
        throw new Error("Can't find user");
    }
    const user = users[0];

    let passwordMatches = null;
    try {
        passwordMatches = await bcrypt.compare(request.password, user.password);
    } catch (error) {
        throw new Error("Invalid password");
    }

    if (passwordMatches) {
        const userDetails = {
            id: user._id,
            name: user.name,
            email: user.email,
            penName: user.penName,
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
        throw new Error("invalid pass");
    }
}

function generateToken(
    payload: AccessTokenPayload,
    secret: string,
    ...rest: any
) {
    return jwt.sign(payload, secret, ...rest);
}

// later, define a context type somewhere
function authenticateToken(context: any) {
    const authorization = context.req.headers["authorization"];
    if (!authorization) {
        throw new Error("No authorization header...");
    }
    try {
        const token = authorization.split(" ")[1]; // second value after the bearer
        const user = jwt.verify(token, process.env.JWT_SECRET!);
        context.user = user as any;
        return;
    } catch (error) {
        // console.log(error);
        throw new Error("Error: " + error);
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
};
