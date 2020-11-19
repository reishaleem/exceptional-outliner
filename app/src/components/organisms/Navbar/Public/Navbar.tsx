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
/*
Next step should be going over the organization structure again and moving stuff around. The components are getting a bit out of hand
And maybe we can make more modularity with the folders. Make a folder called 'Menu' and put the AvatarMenu then ButtonMenu in it, etc...
*/

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
                    <NavbarTitle
                        title="The Exceptional Outliner"
                        destination="/"
                    />
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
