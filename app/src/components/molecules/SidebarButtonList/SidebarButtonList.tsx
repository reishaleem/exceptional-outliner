import { ListItemText } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
    buttonNames: string[];
    icons: any; // array of icon components
    destinations: string[];
}

const SidebarButtonList: React.FC<Props> = ({
    buttonNames,
    icons,
    destinations,
}: Props) => {
    return (
        <List>
            {buttonNames.map((name, i) => {
                return (
                    <ListItem
                        button
                        key={name}
                        component={Link}
                        to={destinations[i]}
                    >
                        <ListItemIcon>{icons[i]}</ListItemIcon>
                        <ListItemText primary={name} />
                    </ListItem>
                );
            })}
        </List>
    );
};

export default SidebarButtonList;
