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
                <NavbarButtonList names={["test1", "test2"]} />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
