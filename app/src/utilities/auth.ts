import { decode } from "jsonwebtoken";

interface Token {
    token: string;
    expiresAt: string;
}

export let accessToken = "";

export function setAccessToken(token: string) {
    accessToken = token;
}

export function getAccessToken() {
    return accessToken;
}

// the issue with doing things this way, particularly with fetching the current user, is that when the accessToken changes, the react app does not refresh
// but does that matter? For now, just go without it. If it ends up being an issue, refer back to the tutorial
export function getCurrentUser() {
    const user: any = decode(accessToken);
    if (Date.now() >= user.exp * 1000) {
        console.log("expired");
    } else {
        console.log(user);
    }
}

export function logout() {
    accessToken = "";
}
