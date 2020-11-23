import authService from "./auth.service";
import Users from "../models/user.model";
import { WorldFields } from "../models/world.model";
import { CreateUserRequest } from "../common/types";

async function getAllUsers() {
    try {
        return await Users.find();
    } catch (error) {
        throw error;
    }
}

async function getUserById(id: string) {
    try {
        return await Users.findById(id);
    } catch (error) {
        throw new Error(`No user with id ${id} exists`);
    }
}

async function createUser(user: CreateUserRequest) {
    const email: string = user.email;
    const name: string = user.name;
    const penName: string = email; // users do not edit their pen names when creating, so it starts as the email
    const bio: string = ""; // users do not edit their bios when creating, so it starts empty
    const worlds: WorldFields[] = [];

    let password = null;
    try {
        password = await authService.encryptPassword(user.password);
    } catch (error) {
        throw new Error("Something went wrong. Please try again.");
    }

    const newUser = new Users({
        name,
        email,
        password,
        penName,
        bio,
        worlds,
    });

    try {
        return await newUser.save();
    } catch (error) {
        if (error.code === 11000) {
            // this is the only duplicate key error (11000) that can occur at this stage
            throw new Error("That email is already in use!");
        }
        throw error;
    }
}

async function updateUser(request: any) {
    const email: string = request.email;
    const name: string = request.name;
    const penName: string = request.penName;
    const bio: string = request.bio;

    let user = null;
    try {
        user = await Users.findById(request.id);
    } catch (error) {
        throw error;
    }

    user!.email = email;
    user!.name = name;
    user!.penName = penName;
    user!.bio = bio;

    try {
        return await user!.save();
    } catch (error) {
        throw error;
    }
}

async function changePassword(request: any) {
    const oldPassword = request.oldPassword;
    const newPassword = request.newPassword;

    let user = null;
    try {
        user = await Users.findById(request.id);
    } catch (error) {
        throw error;
    }

    let passwordMatches = null;
    try {
        passwordMatches = await authService.verifyPassword(
            oldPassword,
            user!.password
        );
    } catch (error) {
        throw new Error("Current password is incorrect");
    }

    if (passwordMatches) {
        let password = null;
        try {
            password = await authService.encryptPassword(newPassword);
        } catch (error) {
            throw new Error("Something went wrong. Please try again.");
        }

        user!.password = password;
        try {
            return await user!.save();
        } catch (error) {
            throw error;
        }
    } else {
        throw new Error("Current password is incorrect");
    }
}

async function checkUsernameExists(username: string) {
    try {
        return await Users.exists({ username: username });
    } catch (error) {
        throw error;
    }
}

export default {
    createUser,
    checkUsernameExists,
    getAllUsers,
    getUserById,
    updateUser,
    changePassword,
};
