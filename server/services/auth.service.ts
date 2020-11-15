import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { access } from "fs";
import jwt from "jsonwebtoken";
import Users from "../models/user.model";

interface LoginRequest {
    email: string;
    password: string;
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
        const accessTokenSecret = process.env.JWT_SECRET;
        const accessToken = jwt.sign(userDetails, accessTokenSecret!, {
            expiresIn: "2m",
        });
        const refreshTokenSecret = process.env.REFRESH_JWT_SECRET;
        const refreshToken = jwt.sign(userDetails, refreshTokenSecret!, {
            expiresIn: "7d",
        });
        // rjid means refresh jwt id
        res.cookie("rjid", refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 3600000,
        });

        // RefreshTokens({
        //     token: refreshToken,
        //     userId: user._id,
        // })
        //     .save()
        //     .then(() => {
        //         response.cookie("jwt", accessToken, { httpOnly: true }); // add secure: true when we add HTTPS
        //         response.cookie("refresh_jwt", refreshToken, {
        //             httpOnly: true,
        //         });
        //         response.send();
        //     })
        //     .catch((error) => {
        //         response
        //             .status(500)
        //             .json("Error with saving refresh token", error);
        //     });

        return {
            accessToken: accessToken,
        };
    } else {
        throw new Error("invalid pass");
    }
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

// async function refreshToken(req, res) {
//     const refreshToken = req.cookies.refresh_jwt;
//     if (!refreshToken) throw "Refresh token not present";
//     if (!(await RefreshTokens.exists({ token: refreshToken })))
//         throw "Refresh token does not exist";

//     jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET, (err, user) => {
//         if (err) throw "Refresh token verification issue";
//         const accessToken = jwt.sign(
//             {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 penName: user.penName,
//             },
//             process.env.JWT_SECRET,
//             {
//                 expiresIn: "2m",
//             }
//         );
//         res.cookie("jwt", accessToken, { httpOnly: true }); // add secure: true when we add HTTPS
//         return {
//             id: user._id,
//             name: user.name,
//             email: user.email,
//             penName: user.penName,
//         };
//     });
// }

// function refreshToken(request, response) {
//     const token = req.cookies.jwt;
//     if (!token) {
//         res.status(401).json("Invalid token")
//         return;
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//         if (err) {
//             res.status(403).json("Token error...");
//             return;
//         }

//         const refreshToken = user.refreshToken;
//         jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET, (err, user) => {
//             if (err) {
//                 res.status(403).json("Token error...");
//                 return;
//             }

//             const newToken = jwt.sign(user, process.env.JWT_SECRET, {
//                 expiresIn: process.env.JWT_TOKEN_LIFE
//             });
//             response.cookie("jwt", newToken, {httpOnly: true}) // add secure: true when we add HTTPS
//             response.send();
//         })

//     });
// }

async function encryptPassword(password: string) {
    return await bcrypt.hash(password, 10);
}

export default {
    login,
    authenticateToken,
    encryptPassword,
};
