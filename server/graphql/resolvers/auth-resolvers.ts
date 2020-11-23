import authService from "../../services/auth.service";

import { Context } from "../../common/types";

import { LoginRequest } from "../../common/types";

export function loginResolver(args: any, context: Context) {
    const request: LoginRequest = {
        email: args.email,
        password: args.password,
    };
    return authService.login(request, context.res);
}

export function logoutResolver(context: Context) {
    const res = context.res;
    res.clearCookie("rjid");
    return true;
}
