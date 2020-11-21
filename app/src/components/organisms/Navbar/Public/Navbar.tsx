import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";

import NavbarButtonList from "../../../molecules/NavbarButtonList/NavbarButtonList";
import NavbarTitle from "../../../atoms/NavbarTitle/NavbarTitle";

import AuthService from "../../../../services/auth.service";

import ButtonDropdown from "../../../molecules/ButtonMenu/ButtonMenu";

interface PropTypes {
    transparent?: boolean;
}

const Navbar: React.FC<PropTypes> = ({ transparent }) => {
    const loggedIn = AuthService.isLoggedIn();

    return (
        <AppBar
            position="static"
            elevation={0}
            color={transparent ? "transparent" : "primary"}
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <NavbarTitle link to="/" title="The Exceptional Outliner" />
                    {loggedIn ? (
                        <ButtonDropdown />
                    ) : (
                        <NavbarButtonList
                            buttonNames={["Sign Up", "Login"]}
                            buttonDestinations={["/register", "/login"]}
                            align="left"
                        />
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
