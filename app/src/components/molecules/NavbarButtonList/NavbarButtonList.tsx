import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface PropTypes {
    buttonNames: Array<string>;
    buttonDestinations: Array<string>;
    align?: string;
}

const useStyles = makeStyles(() => ({
    alignLeft: {
        marginLeft: "auto",
    },
}));

const NavbarButtonList: React.FC<PropTypes> = ({
    buttonNames,
    buttonDestinations,
    align,
}) => {
    const classes = useStyles();

    return (
        <div
            className={clsx({
                [classes.alignLeft]: align === "left",
            })}
        >
            {buttonNames.map((buttonName, i) => {
                return (
                    <Button key={i} component={Link} to={buttonDestinations[i]}>
                        {buttonName}
                    </Button>
                );
            })}
        </div>
    );
};

export default NavbarButtonList;
