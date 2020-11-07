import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import NavbarTitle from "../../../atoms/NavbarTitle/NavbarTitle";
import NavbarButtonList from "../../NavbarButtonList/NavbarButtonList";

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <NavbarTitle title="The Exceptional Outliner" destination="/" />
                <NavbarButtonList
                    buttonNames={["Sign Up", "Login"]}
                    buttonDestinations={["/register", "/login"]}
                    align="left"
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
