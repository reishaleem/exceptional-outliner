import authService from "./auth.service";
import Users from "../models/user.model";
import { WorldFields } from "../models/world.model";

interface CreateUserRequest {
    name: string;
    email: string;
    password: string;
}

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
        throw error;
    }
}

async function createUser(user: CreateUserRequest) {
    const email: string = user.email;
    const name: string = user.name;
    const penName: string = ""; // users do not edit their pen names when creating, so it starts as the email
    const bio: string = ""; // users do not edit their bios when creating, so it starts empty
    const worlds: WorldFields[] = [];

    let password = null;
    try {
        password = await authService.encryptPassword(user.password);
    } catch (error) {
        throw error;
    }

    const newUser = new Users({
        name,
        email,
        password,
        worlds,
    });

    try {
        return newUser.save();
    } catch (error) {
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
