import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";

import NavbarButtonList from "../../../molecules/NavbarButtonList/NavbarButtonList";
import NavbarTitle from "../../../atoms/NavbarTitle/NavbarTitle";

import AuthService from "../../../../services/auth.service";

import { useLogoutMutation } from "../../../../graphql/generated/graphql";
import { useHistory, withRouter, Link } from "react-router-dom";

interface PropTypes {
    transparent?: boolean;
}

const Navbar: React.FC<PropTypes> = ({ transparent }) => {
    const [logout, { client }] = useLogoutMutation();
    const history = useHistory();

    async function clicked() {
        await logout();
        AuthService.setAccessToken("");
        await client.resetStore();
        history.push("/");
    }
    return (
        <AppBar
            position="static"
            elevation={0}
            color={transparent ? "transparent" : "primary"}
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <NavbarTitle
                        title="The Exceptional Outliner"
                        destination="/"
                    />
                    <NavbarButtonList
                        buttonNames={["Sign Up", "Login", "Dashboard"]}
                        buttonDestinations={[
                            "/register",
                            "/login",
                            "/dashboard",
                        ]}
                        align="left"
                    />
                    <Button onClick={() => clicked()}>Logout</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
