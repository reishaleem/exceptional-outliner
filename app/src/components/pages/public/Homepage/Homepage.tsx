import { Button, Card, CardContent, Container, Divider, Grid, List, ListItem, makeStyles, Typography } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build"
import React from "react";

import TestImage from "../../../../images/landing-bg.jpg"
import OnePiece from "../../../../images/onepieceworld.jpg"
import PublicNavbar from "../../../molecules/Navbar/PublicNavbar/PublicNavbar";

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
        //textAlign: "center"
    },
    productTitle: {
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
      },
      productDescription: {
        color: "#999"
      },
      fluidImage: {
        maxWidth: "100%",
        height: "auto",
        verticalAlign: "middle",
        borderStyle: "none",
    },
    footer: {
        padding: "0.9375rem 0",
        textAlign: "center",
        display: "flex",
        zIndex: 2,
        position: "relative"
      },
      left: {
        float: "left",
        display: "block"
      },
      right: {
        padding: "15px 0",
        margin: "0",
        float: "right"
      },
      list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
      },
      inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
      },
      block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: 500,
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block"
      },
}));

export default () => {
    const classes = useStyles();
    return (
        <>
            <PublicNavbar />
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
                                <Typography variant="h3" component="h3" align="center" className={`${classes.productTitle}`}>Product</Typography>
                                <Typography variant="body1" component="h5" align="center" className={`${classes.productDescription}`}>Desc</Typography>
                            </Grid>
                        </Grid>
                        <div>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h4" component="h2" align="center" gutterBottom><BuildIcon fontSize="large" /></Typography>
                                            <Typography variant="h5" component="h2" align="center" gutterBottom>Title</Typography>
                                            <Typography variant="body1" component="p" align="center" gutterBottom>Paragraph</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h4" component="h2" align="center" gutterBottom><BuildIcon fontSize="large" /></Typography>
                                            <Typography variant="h5" component="h2" align="center" gutterBottom>Title</Typography>
                                            <Typography variant="body1" component="p" align="center" gutterBottom>Paragraph</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h4" component="h2" align="center" gutterBottom><BuildIcon fontSize="large" /></Typography>
                                            <Typography variant="h5" component="h2" align="center" gutterBottom>Title</Typography>
                                            <Typography variant="body1" component="p" align="center" gutterBottom>Paragraph</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className={`${classes.section}`}>
                        <Grid container justify="center">
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography variant="h3" component="h3" align="center" className={`${classes.productTitle}`}>About us</Typography>
                            </Grid>
                        </Grid>
                        <div>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6}>
                                        <Typography variant="h4" align="center">
                                            Who we are
                                        </Typography>
                                        <Typography variant="body1">
                                            I am a story lover. I love huge worlds and
                                            the countless untold stories within them.
                                            There is nothing like losing myself in the
                                            endless seas of the Grand Line, the secret
                                            passageways within Hogwarts, or the mists of
                                            the Final Empire. And what I love most is
                                            that we are all capable of inventing our
                                            own, mythical story. We just need a place to
                                            do it. So, I created the Exceptional
                                            Outliner.
                                        </Typography>
                                        <Divider style={{margin: "15px"}}/>
                                        <Typography variant="h4" align="center">
                                            What we do
                                        </Typography>
                                        <Typography variant="body1">
                                            I am a software Engineer studying at Ohio
                                            State University. My goal was to create this
                                            application to combine features from
                                            different apps like{" "}
                                            <a href="https://plotfactory.com">
                                                Plot Factory
                                            </a>{" "}
                                            and{" "}
                                            <a href="https://worldanvil.com">
                                                World Anvil
                                            </a>
                                            . Hopefully when this is complete, it will
                                            provide a nice combination of world
                                            building, outlining, and writing. Check out
                                            the{" "}
                                            <a href="https://github.com/reishaleem/exceptional-outliner">
                                                repository
                                            </a>{" "}
                                            on GitHub to see more information on how
                                            this app was made.
                                        </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <img src={OnePiece} alt="Fantasy World" className={classes.fluidImage}/>
                                </Grid>
                                
                            </Grid>
                        </div>
                    </div>
                </Container>
            </div>
            <footer className={classes.footer}> 
            <Container>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://github.com/reishaleem/exceptional-outliner"
                                className={classes.block}
                            >
                                GitHub
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="#"
                                className={classes.block}
                            >
                                Twitter
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="#"
                                className={classes.block}
                            >
                                Contact Us
                            </a>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    &copy; {new Date().getFullYear()}. All rights reserved.
                </div>
            </Container>
        </footer>
        </>
    )
};
