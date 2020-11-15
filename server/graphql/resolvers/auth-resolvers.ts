import authService from "../../services/auth.service";

import { LoginRequest } from "../../common/types";

export function loginResolver(args: any, context: any) {
    const request: LoginRequest = {
        email: args.email,
        password: args.password,
    };
    return authService.login(request, context.res);
}

export function logoutResolver(context: any) {
    const res = context.res;
    res.clearCookie("rjid");
    return true;
}
