import {
    AppBar,
    IconButton,
    makeStyles,
    Toolbar,
    useTheme,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import NavbarTitle from "../../../atoms/NavbarTitle/NavbarTitle";
import NavbarButtonList from "../../../molecules/NavbarButtonList/NavbarButtonList";

interface Props {
    children?: any;
}

const Navbar: React.FC<Props> = ({ children }: Props) => {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar>
                {/* will be the menu icon for closing the drawer */}
                {children}
                <NavbarTitle
                    title="The Exceptional Outliner"
                    destination="/dashboard"
                />
                <NavbarButtonList
                    buttonNames={["Profile"]}
                    buttonDestinations={["/profile"]}
                    align="left"
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
