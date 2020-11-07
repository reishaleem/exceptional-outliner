import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import { Link } from "react-router-dom";

interface PropTypes {
    title: string;
    destination?: string;
}

const useStyles = makeStyles(() => ({
    titleLink: {
        textDecoration: "none",
        color: "inherit",
    },
}));

const NavbarTitle: React.FC<PropTypes> = ({ title, destination }) => {
    const classes = useStyles();

    return (
        <>
            {destination ? (
                <Link to={destination} className={classes.titleLink}>
                    <Typography variant="h6" component={"h2"}>
                        {title}
                    </Typography>
                </Link>
            ) : (
                <Typography variant="h6" component={"h2"}>
                    {title}
                </Typography>
            )}
        </>
    );
};

export default NavbarTitle;
