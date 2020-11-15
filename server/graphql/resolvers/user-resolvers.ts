import userService from "../../services/user.service";

import { CreateUserRequest } from "../../common/types";

export function usersResolver() {
    return userService.getAllUsers();
}

export function userResolver(args: any) {
    return userService.getUserById(args.id);
}

export function createUserResolver(args: any) {
    const request: CreateUserRequest = {
        name: args.name,
        email: args.email,
        password: args.password,
    };

    return userService.createUser(request);
}
