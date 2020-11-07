import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";

import NavbarButtonList from "../../NavbarButtonList/NavbarButtonList";
import NavbarTitle from "../../../atoms/NavbarTitle/NavbarTitle";

interface PropTypes {
    transparent?: boolean;
}

const Navbar: React.FC<PropTypes> = ({ transparent }) => {
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
                        buttonNames={["Sign Up", "Login"]}
                        buttonDestinations={["/register", "/login"]}
                        align="left"
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
