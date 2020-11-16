import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Drawer,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PublicIcon from "@material-ui/icons/Public";
import ExploreIcon from "@material-ui/icons/Explore";
import HelpIcon from "@material-ui/icons/Help";
import React from "react";
import { Explore } from "@material-ui/icons";

interface Props {
    open: boolean;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
    },
}));

const MainDrawer: React.FC<Props> = ({ open }: Props) => {
    const classes = useStyles();
    return (
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
                Will need to decide what to put here
            </div>
            <List>
                <ListItem button key={"Worlds"}>
                    <ListItemIcon>
                        <PublicIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Worlds"} />
                </ListItem>
                <ListItem button key={"Explore"}>
                    <ListItemIcon>
                        <ExploreIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Explore"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key={"Help"}>
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Help"} />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default MainDrawer;
