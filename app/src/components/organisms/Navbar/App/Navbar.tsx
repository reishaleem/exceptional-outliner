import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarTitle from "../../../atoms/NavbarTitle/NavbarTitle";
import AvatarDropdown from "../../../molecules/AvatarDropdown/AvatarDropdown";

interface Props {
    drawerWidth: number;
    open: boolean;
    closeDrawer: any; // function to close the drawer attached
    openDrawer: any; // function to open the drawer attached
}

const useStyles = (drawerWidth: number) =>
    makeStyles((theme) => ({
        appBar: {
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
    }));

const Navbar: React.FC<Props> = ({
    drawerWidth,
    open,
    closeDrawer,
    openDrawer,
}: Props) => {
    const classes = useStyles(drawerWidth)();

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
            elevation={0}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={open ? closeDrawer : openDrawer}
                    edge="start"
                    //className={clsx(classes.menuButton)}
                >
                    <MenuIcon />
                </IconButton>
                <NavbarTitle title="The Exceptional Outliner" />
                <AvatarDropdown />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
