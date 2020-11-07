import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import { Link } from "react-router-dom";

interface PropTypes {
    names: Array<string>;
    refs: Array<string>;
}

const useStyles = makeStyles(() => ({
    container: {
        marginLeft: "auto",
    },
}));

const NavbarButtonList: React.FC<PropTypes> = ({ names, refs }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {names.map((name, i) => {
                return (
                    <Button key={i} component={Link} to={refs[i]}>
                        {name}
                    </Button>
                );
            })}
        </div>
    );
};

export default NavbarButtonList;
