import { MenuItem } from "@material-ui/core";
import React from "react";
import { useLogoutMutation } from "../../../graphql/generated/graphql";
import AuthService from "../../../services/auth.service";
import { useHistory } from "react-router-dom";

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
        if (refreshOnClick) {
            window.location.reload();
        } else {
            history.push("/");
        }
    }

    return <MenuItem onClick={logoutUser}>Logout</MenuItem>;
};

export default LogoutMenuItem;
