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

export function updateUserResolver(args: any) {
    const request = {
        id: args.id,
        name: args.name,
        email: args.email,
        penName: args.penName,
        bio: args.bio,
    };

    return userService.updateUser(request);
}

export function updateUserPasswordResolver(args: any) {
    const request = {
        id: args.id,
        oldPassword: args.oldPassword,
        newPassword: args.newPassword,
    };

    return userService.changePassword(request);
}
