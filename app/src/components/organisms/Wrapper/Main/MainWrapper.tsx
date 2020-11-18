import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";

import MainDrawer from "../../Drawer/Main/Drawer";
import Navbar from "../../Navbar/App/Navbar";

interface Props {
    children?: any;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const MainWrapper: React.FC<Props> = ({ children }: Props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box display="flex">
            <CssBaseline />
            <Navbar
                drawerWidth={drawerWidth}
                closeDrawer={handleDrawerClose}
                openDrawer={handleDrawerOpen}
                open={open}
            />
            <MainDrawer open={open} />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Grid container spacing={2}>
                    {children}
                </Grid>
            </main>
        </Box>
    );
};

export default MainWrapper;
