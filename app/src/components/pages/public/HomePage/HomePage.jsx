import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../../atoms/PublicNavbar/Navbar";
import { Container, Grid } from "@material-ui/core";
import Jumbotron from "../../../atoms/Jumbotron/Jumbotron";

const useStyles = makeStyles((theme) => ({
    pad: {
        paddingLeft: "15px",
        paddingRight: "15px",
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Grid container spacing={3} className={classes.pad}>
                <Grid item md={12}>
                    <Jumbotron />
                </Grid>
                <Grid item md={12}>
                    <h1>Home page</h1>
                </Grid>
            </Grid>
        </>
    );
};
