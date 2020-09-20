import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { withRouter, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: "#fff",
        display: "block",

        textDecoration: "none",
        backgroundColor: "transparent",
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" elevation={0}>
            <Container>
                <Toolbar>
                    <NavLink
                        to="/"
                        exact
                        className={`${classes.link} ${classes.title}`}
                    >
                        <Typography variant="h6">
                            The Exceptional Outliner
                        </Typography>
                    </NavLink>
                    <NavLink
                        to="/about"
                        exact
                        className={classes.link}
                        activeStyle={{ color: "rgba(255,255,255,.5)" }}
                    >
                        <Button color="inherit">About</Button>
                    </NavLink>
                    <NavLink
                        to="/features"
                        exact
                        className={classes.link}
                        activeStyle={{ color: "rgba(255,255,255,.5)" }}
                    >
                        <Button color="inherit">Features</Button>
                    </NavLink>
                    <NavLink
                        to="/register"
                        exact
                        className={classes.link}
                        activeStyle={{ color: "rgba(255,255,255,.5)" }}
                    >
                        <Button color="inherit">Sign Up</Button>
                    </NavLink>
                    <NavLink
                        to="/login"
                        exact
                        className={classes.link}
                        activeStyle={{ color: "rgba(255,255,255,.5)" }}
                    >
                        <Button color="inherit">Login</Button>
                    </NavLink>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default withRouter(Navbar);
