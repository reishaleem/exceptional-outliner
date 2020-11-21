import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";

import AuthService from "../../../services/auth.service";

import { useLogoutMutation } from "../../../graphql/generated/graphql";

interface Props {
    refreshOnClick?: boolean;
}

const LogoutMenuItem: React.FC<Props> = ({ refreshOnClick }: Props) => {
    const [logout, { client }] = useLogoutMutation();
    const history = useHistory();

    async function logoutUser() {
        await logout();
        AuthService.setAccessToken("");
        await client.resetStore();
        // The refreshOnClick case is solely for if the user logs out from the home screen, because the app will
        // not re-render, which specifically means the Navbar won't update and will still show the logged in version
        // Issue here: https://github.com/reishaleem/outliner-design/issues/2
        if (refreshOnClick) {
            window.location.reload();
        } else {
            history.push("/");
        }
    }

    return <MenuItem onClick={logoutUser}>Logout</MenuItem>;
};

export default LogoutMenuItem;
