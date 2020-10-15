import { Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import TestImage from "../../../../images/landing-bg.jpg"

const useStyles = makeStyles((theme) => ({
    background: {
        
        height: "90vh",
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center"
    },
    filter: {
        "&:before": {
          background: "rgba(0, 0, 0, 0.5)"
        },
        "&:after,&:before": {
          position: "absolute",
          zIndex: "1",
          width: "100%",
          height: "100%",
          display: "block",
          left: "0",
          top: "0",
          content: "''"
        }
    },
    title: {
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "#FFFFFF",
        textDecoration: "none"
    },
    subtitle: {
        color: "#FFFFFF"
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <>
            <div className={`${classes.background}`} style={{backgroundImage: "url(" + TestImage + ")"}}>
                <Container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="h2" component="h2" className={classes.title}>The Exceptional Outliner</Typography>
                        <Typography variant="h5" className={classes.subtitle} gutterBottom>The ultimate outlining tool.</Typography>
                        <Button color="secondary" variant="contained" size="large">Start your journey</Button>
                    </Grid>
                </Container>
            </div>
        </>
    )
};
