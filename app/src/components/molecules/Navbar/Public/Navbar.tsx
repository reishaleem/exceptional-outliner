import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NavbarTitle from "../../../atoms/NavbarTitle/NavbarTitle";

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <NavbarTitle title="The Exceptional Outliner" />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
