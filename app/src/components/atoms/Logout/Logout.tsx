import React from "react";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";

import AuthService from "../../../services/auth.service";

import { useLogoutMutation } from "../../../graphql/generated/graphql";

interface Props {
    refreshOnClick?: boolean;
    children: React.ReactNode;
}

const Logout: React.FC<Props> = ({ refreshOnClick, children }: Props) => {
    const [logout, { client }] = useLogoutMutation();
    const history = useHistory();

    async function logoutUser() {
        await client.resetStore();
        await logout();
        AuthService.setAccessToken("");
        // The refreshOnClick case is solely for if the user logs out from the home screen, because the app will
        // not re-render, which specifically means the Navbar won't update and will still show the logged in version
        // Issue here: https://github.com/reishaleem/exceptional-outliner/issues/3
        if (refreshOnClick) {
            window.location.reload();
        } else {
            history.push("/");
        }
    }

    return <Box onClick={logoutUser}>{children}</Box>;
};

export default Logout;
