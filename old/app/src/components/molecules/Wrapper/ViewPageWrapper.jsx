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
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ExploreIcon from "@material-ui/icons/Explore";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import PublicIcon from "@material-ui/icons/Public";
import CreateIcon from "@material-ui/icons/Create";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import BrushIcon from "@material-ui/icons/Brush";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import MapIcon from "@material-ui/icons/Map";
import TimelineIcon from "@material-ui/icons/Timeline";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import SettingsIcon from "@material-ui/icons/Settings";
import NotesIcon from "@material-ui/icons/Notes";
import BuildIcon from "@material-ui/icons/Build";
import NoteIcon from "@material-ui/icons/Note";
import DescriptionIcon from "@material-ui/icons/Description";
import { withRouter, NavLink, Link } from "react-router-dom";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Container from "@material-ui/core/Container";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import AuthService from "../../../services/auth.service";
import ViewPageNavbarMenu from "../../atoms/ViewPageNavbarMenu/ViewPageNavbarMenu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none",
    },
    title: {
        // flexGrow: 1,
        marginRight: "5px",
    },
    toolbar: {
        alignItems: "flex-start",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
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
    navlink: {
        alignSelf: "flex-end",
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    sidebarLink: {
        textDecoration: "none",
        color: "inherit",
    },
}));

const ViewPageWrapper = ({ universeDropdownStartOpen, children }) => {
    const classes = useStyles();
    const theme = useTheme();

    const currentUser = AuthService.getCurrentUser();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" elevation={0}>
                <Toolbar>
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

            <main style={{ marginTop: "4vh" }}>
                <div className={classes.drawerHeader} />
                <Grid container spacing={3}>
                    <Container>
                        <Grid
                            container
                            item
                            md={12}
                            spacing={2}
                            style={{
                                border: "1px solid black",
                            }}
                            direction="row"
                        >
                            <AppBar position="static" elevation={0}>
                                <Toolbar className={classes.toolbar}>
                                    <NavLink
                                        to="/app"
                                        exact
                                        className={`${classes.link} ${classes.title}`}
                                    >
                                        <Typography variant="h3" noWrap>
                                            Logo
                                        </Typography>
                                    </NavLink>

                                    <ViewPageNavbarMenu title="Wikis">
                                        <Link
                                            to="/app"
                                            className={classes.menuLink}
                                        >
                                            <MenuItem>
                                                <Typography variant="inherit">
                                                    Characters
                                                </Typography>
                                                <ListItemIcon>
                                                    <ExpandMore fontSize="small" />
                                                </ListItemIcon>
                                            </MenuItem>
                                        </Link>
                                        <Link
                                            to="/app"
                                            className={classes.menuLink}
                                        >
                                            <MenuItem>
                                                <Typography variant="inherit">
                                                    Locations
                                                </Typography>
                                                <ListItemIcon>
                                                    <ExpandMore fontSize="small" />
                                                </ListItemIcon>
                                            </MenuItem>
                                        </Link>
                                        <Link
                                            to="/app"
                                            className={classes.menuLink}
                                        >
                                            <MenuItem>
                                                <Typography variant="inherit">
                                                    Groups
                                                </Typography>
                                                <ListItemIcon>
                                                    <ExpandMore fontSize="small" />
                                                </ListItemIcon>
                                            </MenuItem>
                                        </Link>
                                        <Link
                                            to="/app"
                                            className={classes.menuLink}
                                        >
                                            <MenuItem>
                                                <Typography variant="inherit">
                                                    World
                                                </Typography>
                                                <ListItemIcon>
                                                    <ExpandMore fontSize="small" />
                                                </ListItemIcon>
                                            </MenuItem>
                                        </Link>
                                    </ViewPageNavbarMenu>
                                    <ViewPageNavbarMenu title="Media">
                                        <Link
                                            to="/app"
                                            className={classes.menuLink}
                                        >
                                            <MenuItem>
                                                <Typography variant="inherit">
                                                    Books?
                                                </Typography>
                                                <ListItemIcon>
                                                    <ExpandMore fontSize="small" />
                                                </ListItemIcon>
                                            </MenuItem>
                                            <MenuItem>
                                                <Typography variant="inherit">
                                                    Episodes?
                                                </Typography>
                                                <ListItemIcon>
                                                    <ExpandMore fontSize="small" />
                                                </ListItemIcon>
                                            </MenuItem>
                                            <MenuItem>
                                                <Typography variant="inherit">
                                                    Bonus Material?
                                                </Typography>
                                                <ListItemIcon>
                                                    <ExpandMore fontSize="small" />
                                                </ListItemIcon>
                                            </MenuItem>
                                            <MenuItem>
                                                <Typography variant="inherit">
                                                    Art?
                                                </Typography>
                                                <ListItemIcon>
                                                    <ExpandMore fontSize="small" />
                                                </ListItemIcon>
                                            </MenuItem>
                                        </Link>
                                    </ViewPageNavbarMenu>
                                    <ViewPageNavbarMenu title="Community">
                                        <Link
                                            to="/app"
                                            className={classes.menuLink}
                                        >
                                            <MenuItem>
                                                <Typography variant="inherit">
                                                    Forum
                                                </Typography>
                                                <ListItemIcon>
                                                    <ExpandMore fontSize="small" />
                                                </ListItemIcon>
                                            </MenuItem>
                                            <MenuItem>
                                                <Typography variant="inherit">
                                                    Featured Articles
                                                </Typography>
                                                <ListItemIcon>
                                                    <ExpandMore fontSize="small" />
                                                </ListItemIcon>
                                            </MenuItem>
                                            <MenuItem>
                                                <Typography variant="inherit">
                                                    Discord?
                                                </Typography>
                                                <ListItemIcon>
                                                    <ExpandMore fontSize="small" />
                                                </ListItemIcon>
                                            </MenuItem>
                                            <MenuItem>
                                                <Typography variant="inherit">
                                                    Editors
                                                </Typography>
                                                <ListItemIcon>
                                                    <ExpandMore fontSize="small" />
                                                </ListItemIcon>
                                            </MenuItem>
                                        </Link>
                                    </ViewPageNavbarMenu>
                                </Toolbar>
                            </AppBar>
                            {children}
                        </Grid>
                    </Container>
                </Grid>
            </main>
        </div>
    );
};

export default withRouter(ViewPageWrapper);
