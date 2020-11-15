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
};
