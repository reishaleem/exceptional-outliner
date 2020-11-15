import userService from "../../services/user.service";

import { CreateUserRequest } from "../../common/types";

export function usersResolver() {
    try {
        return userService.getAllUsers();
    } catch (error) {
        throw error;
    }
}

export function userResolver(args: any) {
    try {
        return userService.getUserById(args.id);
    } catch (error) {
        throw error;
    }
}

export function createUserResolver(args: any) {
    const request: CreateUserRequest = {
        name: args.name,
        email: args.email,
        password: args.password,
    };
    try {
        return userService.createUser(request);
    } catch (error) {
        throw error;
    }
}
