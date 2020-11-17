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
import SidebarButtonList from "../../../molecules/SidebarButtonList/SidebarButtonList";

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
            <SidebarButtonList
                buttonNames={["Worlds", "Explore"]}
                icons={[<PublicIcon />, <ExploreIcon />]}
                destinations={["/worlds", "/explore"]}
            />
            <Divider />
            <SidebarButtonList
                buttonNames={["Help"]}
                icons={[<HelpIcon />]}
                destinations={["/help"]}
            />
        </Drawer>
    );
};

export default MainDrawer;
