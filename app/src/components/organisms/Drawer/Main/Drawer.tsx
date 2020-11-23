import React from "react";
import { Divider, makeStyles, Drawer } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import ExploreIcon from "@material-ui/icons/Explore";
import HelpIcon from "@material-ui/icons/Help";
import HomeIcon from "@material-ui/icons/Home";

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
            <div className={classes.drawerHeader}>Brand Logo</div>
            {/* <Divider /> */}
            <SidebarButtonList
                buttonNames={["Dashboard", "Worlds", "Explore"]}
                icons={[<HomeIcon />, <PublicIcon />, <ExploreIcon />]}
                destinations={["/dashboard", "/worlds", "/explore"]}
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
