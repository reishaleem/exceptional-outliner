import { Button, Card, CardContent, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build"
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
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: 3
      },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    productTitle: {
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
      },
      productDescription: {
        color: "#999"
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
            <div className={`${classes.mainRaised} ${classes.main}`}>
                
                <Container>
                    <div className={`${classes.section}`}>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography variant="h3" component="h3" className={`${classes.productTitle}`}>Product</Typography>
                            <Typography variant="body1" component="h5" className={`${classes.productDescription}`}>Desc</Typography>
                        </Grid>
                    </Grid>
                    <div>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={4}>
                                <Card elevation={0}>
                                    <CardContent>
                                        <Typography variant="h4" component="h2" gutterBottom><BuildIcon fontSize="large" /></Typography>
                                        <Typography variant="h5" component="h2" gutterBottom>Title</Typography>
                                        <Typography variant="body1" component="p" gutterBottom>Paragraph</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Card elevation={0}>
                                    <CardContent>
                                        <Typography variant="h4" component="h2" gutterBottom><BuildIcon fontSize="large" /></Typography>
                                        <Typography variant="h5" component="h2" gutterBottom>Title</Typography>
                                        <Typography variant="body1" component="p" gutterBottom>Paragraph</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Card elevation={0}>
                                    <CardContent>
                                        <Typography variant="h4" component="h2" gutterBottom><BuildIcon fontSize="large" /></Typography>
                                        <Typography variant="h5" component="h2" gutterBottom>Title</Typography>
                                        <Typography variant="body1" component="p" gutterBottom>Paragraph</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                    </div>
                </Container>
                

                
            </div>
        </>
    )
};
