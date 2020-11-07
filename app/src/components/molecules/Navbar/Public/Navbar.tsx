import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import NavbarTitle from "../../../atoms/NavbarTitle/NavbarTitle";
import NavbarButtonList from "../../NavbarButtonList/NavbarButtonList";

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <NavbarTitle title="The Exceptional Outliner" />
                <NavbarButtonList
                    names={["Sign Up", "Login"]}
                    refs={["/register", "/login"]}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
