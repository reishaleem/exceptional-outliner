import { Button } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

interface PropTypes {
    names: Array<string>;
}

const useStyles = makeStyles(() => ({
    container: {
        marginLeft: "auto",
    },
}));

const NavbarButtonList: React.FC<PropTypes> = ({ names }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {names.map((name, i) => {
                return <Button key={i}>{name}</Button>;
            })}
        </div>
    );
};

export default NavbarButtonList;
