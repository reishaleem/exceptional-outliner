import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "react-router-dom";

interface PropTypes {
    title: string;
    destination?: string;
}

const useStyles = makeStyles(() => ({
    titleLink: {
        textDecoration: "none",
    },
}));

const NavbarTitle: React.FC<PropTypes> = ({
    title,
    destination,
}: PropTypes) => {
    const classes = useStyles();

    return (
        <>
            {destination ? (
                <Typography
                    variant="h6"
                    component={Link}
                    to={destination}
                    color="inherit"
                    className={classes.titleLink}
                >
                    {title}
                </Typography>
            ) : (
                <Typography variant="h6" component={"h2"}>
                    {title}
                </Typography>
            )}
        </>
    );
};

export default NavbarTitle;
