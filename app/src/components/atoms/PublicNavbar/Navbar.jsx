import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Container, Divider } from "@material-ui/core";
import { withRouter, NavLink, Link } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

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
    menuLink: {
        color: "inherit",
        textDecoration: "none",
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const currentUser = AuthService.getCurrentUser();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    {currentUser ? (
                        <>
                            <Button
                                color="inherit"
                                aria-label="account of current user"
                                aria-controls="app-signout-menu"
                                aria-haspopup="true"
                                onClick={handleMenu}
                            >
                                {currentUser.name}
                            </Button>
                            <Menu
                                id="app-signout-menu"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <Link to="/app" className={classes.menuLink}>
                                    <MenuItem>App</MenuItem>
                                </Link>
                                <Divider variant="middle" />
                                <Link
                                    to="/"
                                    onClick={() => AuthService.logout()}
                                    className={classes.menuLink}
                                >
                                    <MenuItem>Sign Out</MenuItem>
                                </Link>
                            </Menu>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default withRouter(Navbar);
