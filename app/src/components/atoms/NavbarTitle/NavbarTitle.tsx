import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "react-router-dom";

// The to is required only if link is there. Otherwise neither should be present.
// issue: https://github.com/reishaleem/exceptional-outliner/issues/4
interface Props {
    link?: boolean;
    to?: string;
    title: string;
}

const useStyles = makeStyles(() => ({
    titleLink: {
        textDecoration: "none",
    },
}));

const NavbarTitle: React.FC<Props> = ({ link, to, title }: Props) => {
    const classes = useStyles();

    return (
        <>
            {link ? (
                <Typography
                    variant="h6"
                    component={Link}
                    to={to!}
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
