const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let Users = require("../models/user.model.ts");
let RefreshTokens = require("../models/refreshTokens.model");

async function login(request, response) {
    const email = request.email;

    const users = await Users.find({ email: email }).exec();
    if (!users || !users[0]) {
        response.status(400).json("Error: Email or password is incorrect");
        return;
    }
    const user = users[0];

    let passwordMatches = null
    try {
        passwordMatches = await bcrypt.compare(request.password, user.password);
    } catch(error) {
        response.status(500).json("Error comparing password", error);
        return;
    }

    if (passwordMatches) {
        const userDetails = {
            id: user._id,
            name: user.name,
            email: user.email,
            penName: user.penName,
        };
        const accessToken = jwt.sign(userDetails, process.env.JWT_SECRET, {
            expiresIn: "2m"
        });
        const refreshToken = jwt.sign(userDetails, process.env.REFRESH_JWT_SECRET, {
            expiresIn: "7d"
        })
        
        RefreshTokens({
            token: refreshToken,
            userId: user._id,
        }).save()
        .then(() => {
            response.cookie("jwt", accessToken, {httpOnly: true}) // add secure: true when we add HTTPS
            response.cookie("refresh_jwt", refreshToken, {httpOnly: true});
            response.send();
        })
        .catch((error) => {
            response.status(500).json("Error with saving refresh token", error);
        })
        
    } else {
        response.status(400).json("Error: Username or password is incorrect");
    }
}

function authenticateToken(req, res, next) {
    const token = req.cookies.jwt;
    if (!token) {
        res.status(401).json("Invalid token")
        return;
    }

    console.log(jwt.decode(token))
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log("can't verify. Now refreshing")
            req.user = refreshToken(req, res)
            .catch((error) => {
                console.log(error)
                return res.status(403).json("Error refreshing token");
            })
        } else {
            req.user = user;
        }
        next();
    });
}

async function refreshToken(req, res) {
    const refreshToken = req.cookies.refresh_jwt;
    if (!refreshToken) throw "Refresh token not present";
    if (!await RefreshTokens.exists({token: refreshToken})) throw "Refresh token does not exist";

    jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET, (err, user) => {
        if (err) throw "Refresh token verification issue";
        const accessToken = jwt.sign(
            {
                id: user._id,
                name: user.name,
                email: user.email,
                penName: user.penName
            }, 
            process.env.JWT_SECRET, 
            {
                expiresIn: "2m"
            }
        );
        res.cookie("jwt", accessToken, {httpOnly: true}) // add secure: true when we add HTTPS
        return {
            id: user._id,
            name: user.name,
            email: user.email,
            penName: user.penName
        }
    })
}

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

async function encryptPassword(password) {
    return await bcrypt.hash(password, 10);
}

module.exports = {
    login,
    authenticateToken,
    encryptPassword
}