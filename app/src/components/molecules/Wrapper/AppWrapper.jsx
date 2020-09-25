import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExploreIcon from "@material-ui/icons/Explore";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import PublicIcon from "@material-ui/icons/Public";
import { withRouter, NavLink, Link } from "react-router-dom";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import AuthService from "../../../services/auth.service";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
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
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none",
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
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
    link: {
        color: "#fff",
        display: "block",

        textDecoration: "none",
        backgroundColor: "transparent",
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    sidebarLink: {
        textDecoration: "none",
        color: "inherit",
    },
}));

const AppWrapper = ({ children }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [accountDropdownOpen, setAccountDropdownOpen] = React.useState(false);

    const currentUser = AuthService.getCurrentUser();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleAccountDropdownClick = () => {
        setAccountDropdownOpen(!accountDropdownOpen);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <NavLink
                        to="/app"
                        exact
                        className={`${classes.link} ${classes.title}`}
                    >
                        <Typography variant="h6" noWrap>
                            The Exceptional Outliner
                        </Typography>
                    </NavLink>
                    <IconButton aria-label="announcements">
                        <AnnouncementIcon style={{ color: "#fff" }} />
                    </IconButton>
                    <IconButton aria-label="notifications">
                        <NotificationsIcon style={{ color: "#fff" }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={handleAccountDropdownClick}>
                        <ListItemIcon>
                            <Avatar
                                alt="Account Name"
                                src="./account-profile-image.jpg"
                            >
                                {currentUser.name.charAt(0)}
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary={currentUser.name} />
                        {accountDropdownOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                        in={accountDropdownOpen}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List component="div" disablePadding>
                            <Link to="/app" className={classes.sidebarLink}>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="App" />
                                </ListItem>
                            </Link>
                            <Link to="/profile" className={classes.sidebarLink}>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <AccountCircle />
                                    </ListItemIcon>
                                    <ListItemText primary="My Account" />
                                </ListItem>
                            </Link>
                            <Link to="/" className={classes.sidebarLink}>
                                <ListItem
                                    button
                                    className={classes.nested}
                                    onClick={() => AuthService.logout()}
                                >
                                    <ListItemIcon>
                                        <ExitToAppIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Sign Out" />
                                </ListItem>
                            </Link>
                        </List>
                    </Collapse>
                </List>
                <Divider />
                <List>
                    <Link to={"/app/universes"} className={classes.sidebarLink}>
                        <ListItem button>
                            <ListItemIcon>
                                <PublicIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Universes"} />
                        </ListItem>
                    </Link>
                </List>
                <Divider variant="middle" />
                <List>
                    <Link to={"/app/explore"} className={classes.sidebarLink}>
                        <ListItem button>
                            <ListItemIcon>
                                <ExploreIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Explore"} />
                        </ListItem>
                    </Link>

                    <ListItem button>
                        <ListItemIcon>
                            <HelpOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Help"} />
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {children}
            </main>
        </div>
    );
};

export default withRouter(AppWrapper);
