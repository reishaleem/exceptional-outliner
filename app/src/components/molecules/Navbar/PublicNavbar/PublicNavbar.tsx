import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
    Container,
    Menu,
    MenuItem,
    Divider,
} from "@material-ui/core";
import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

import AuthService from "../../../../services/auth.service";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    link: {
        color: "#fff",
        display: "block",
        textDecoration: "none",
        backgroundColor: "transparent",
    },
    navlink: {
        "&:hover,&:focus": {
            background: "rgba(200, 200, 200, 0.2)",
        },
        borderRadius: "4px",
    },
    menuLink: {
        color: "inherit",
        textDecoration: "none",
    },
}));

const PublicNavbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const currentUser = AuthService.getCurrentUser();

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="absolute" color="transparent" elevation={0}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <NavLink
                            to={"/"}
                            exact
                            className={`${classes.link} ${classes.title}`}
                        >
                            <Typography variant="h6">
                                The Exceptional Outliner
                            </Typography>
                        </NavLink>
                        <NavLink
                            to="/features"
                            exact
                            className={`${classes.link} ${classes.navlink}`}
                            activeStyle={{
                                background: "rgba(200, 200, 200, 0.2)",
                            }}
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
                                    className={`${classes.link} ${classes.navlink}`}
                                >
                                    {currentUser.name}
                                </Button>
                                <Menu
                                    id="app-signout-menu"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "center",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "center",
                                    }}
                                    keepMounted
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <Link
                                        to="/app"
                                        className={classes.menuLink}
                                    >
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
                                    className={`${classes.link} ${classes.navlink}`}
                                    activeStyle={{
                                        background: "rgba(200, 200, 200, 0.2)",
                                    }}
                                >
                                    <Button color="inherit">Sign Up</Button>
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    exact
                                    className={`${classes.link} ${classes.navlink}`}
                                    activeStyle={{
                                        background: "rgba(200, 200, 200, 0.2)",
                                    }}
                                >
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                            </>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default withRouter(PublicNavbar);
