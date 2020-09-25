import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    fluid: {
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: "4rem",
        paddingBottom: "2rem",
        borderRadius: 0,
    },
    jumbotron: {
        marginBottom: "2rem",
        backgroundColor: "#e9ecef",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={`${classes.fluid} ${classes.jumbotron}`}>
            <Container>
                <Typography variant="h4">Create your world.</Typography>
                <Typography variant="h4">Plan your novel.</Typography>
                <Typography variant="h4">Be Exceptional.</Typography>
                <Link to={"/register"} className={classes.link}>
                    <Button variant="contained" color="secondary">
                        Create your free account
                    </Button>
                </Link>
            </Container>
        </div>
    );
};
