import { MenuItem } from "@material-ui/core";
import React from "react";
import { useLogoutMutation } from "../../../graphql/generated/graphql";
import AuthService from "../../../services/auth.service";
import { useHistory } from "react-router-dom";

const LogoutMenuItem = () => {
    const [logout, { client }] = useLogoutMutation();
    const history = useHistory();

    async function logoutUser() {
        await logout();
        AuthService.setAccessToken("");
        await client.resetStore();
        history.push("/");
    }

    return <MenuItem onClick={logoutUser}>Logout</MenuItem>;
};

export default LogoutMenuItem;
