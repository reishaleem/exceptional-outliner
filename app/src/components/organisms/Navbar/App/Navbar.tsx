import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";

import NavbarTitle from "../../../atoms/NavbarTitle/NavbarTitle";
import UserMenu from "../../../molecules/UserMenu/UserMenu";

interface Props {
    shiftAmount: number;
    shifted: boolean;
    closeDrawer: any; // function to close the drawer attached
    openDrawer: any; // function to open the drawer attached
    userName: string;
    userProfilePicture: string;
}

const useStyles = (shiftAmount: number) =>
    makeStyles((theme) => ({
        appBar: {
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${shiftAmount}px)`,
            marginLeft: shiftAmount,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
    }));

const Navbar: React.FC<Props> = ({
    shiftAmount,
    shifted,
    closeDrawer,
    openDrawer,
    userName,
    userProfilePicture,
}: Props) => {
    const classes = useStyles(shiftAmount)();

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: shifted,
            })}
            elevation={0}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={shifted ? closeDrawer : openDrawer}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <NavbarTitle title="The Exceptional Outliner" />
                <UserMenu
                    items={["Settings"]}
                    itemDestinations={["/settings"]}
                    profilePicture={userProfilePicture}
                    name={userName}
                    variant="avatar"
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
