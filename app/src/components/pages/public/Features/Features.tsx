import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

import TestImage from "../../../../images/landing-bg.jpg";
import PublicFooter from "../../../molecules/Footer/PublicFooter";
import PublicNavbar from "../../../molecules/Navbar/PublicNavbar/PublicNavbar";

const useStyles = makeStyles((theme) => ({
    background: {
        height: "40vh",
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
    },
    filter: {
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)",
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''",
        },
    },
    title: {
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "#FFFFFF",
        textDecoration: "none",
    },
    subtitle: {
        color: "#FFFFFF",
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: 3,
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    section: {
        padding: "70px 0",
        //textAlign: "center"
    },
    productTitle: {
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
    },
    productDescription: {
        //color: "#999",
    },
    fluidImage: {
        maxWidth: "100%",
        height: "auto",
        verticalAlign: "middle",
        borderStyle: "none",
    },
    cardHeader: {
        padding: ".75rem 1.25rem",
        marginBottom: "0",
        backgroundColor: "rgba(0,0,0,.03)",
        borderBottom: "1px solid rgba(0,0,0,.125)",
        fontSize: "1rem",
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <>
            <PublicNavbar />
            <div
                className={`${classes.background}`}
                style={{ backgroundImage: "url(" + TestImage + ")" }}
            ></div>
            <div className={`${classes.mainRaised} ${classes.main}`}>
                <Container>
                    <div className={`${classes.section}`}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography
                                    variant="h3"
                                    component="h3"
                                    className={`${classes.productTitle}`}
                                >
                                    Completed Features
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <Typography
                                    variant="body1"
                                    component="h5"
                                    className={`${classes.productDescription}`}
                                    gutterBottom
                                >
                                    Features are designed to provide a seamless
                                    experience for both casual and dedicated
                                    writers. Whether you are creating an epic
                                    second world or your story takes place
                                    within a single room, these features aim to
                                    bring you an easy and fun experience.
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                sm={12}
                                md={9}
                                spacing={1}
                            >
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card elevation={1}>
                                        <div className={classes.cardHeader}>
                                            User creation
                                        </div>
                                        <CardContent>
                                            <Typography
                                                variant="body1"
                                                component="p"
                                            >
                                                Create an account and sign in
                                                and out. The app uses local
                                                storage to store a JwT token for
                                                authentication and redirecting
                                                if accessing pages the user is
                                                not allowed.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card elevation={1}>
                                        <div className={classes.cardHeader}>
                                            User creation
                                        </div>
                                        <CardContent>
                                            <Typography
                                                variant="body1"
                                                component="p"
                                            >
                                                Create an account and sign in
                                                and out. The app uses local
                                                storage to store a JwT token for
                                                authentication and redirecting
                                                if accessing pages the user is
                                                not allowed.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card elevation={1}>
                                        <div className={classes.cardHeader}>
                                            User creation
                                        </div>
                                        <CardContent>
                                            <Typography
                                                variant="body1"
                                                component="p"
                                            >
                                                Create an account and sign in
                                                and out. The app uses local
                                                storage to store a JwT token for
                                                authentication and redirecting
                                                if accessing pages the user is
                                                not allowed.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div>
                            <Grid container spacing={2}></Grid>
                        </div>
                    </div>
                    <div className={`${classes.section}`}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography
                                    variant="h3"
                                    component="h3"
                                    className={`${classes.productTitle}`}
                                >
                                    Work In Progress
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <Typography
                                    variant="body1"
                                    component="h5"
                                    className={`${classes.productDescription}`}
                                    gutterBottom
                                >
                                    Our goal is to provide the easiest and most
                                    enjoyable experience around. We are
                                    continously improving to ensure we meet this
                                    goal. All user feedback is taken seriously
                                    and appreciated, because at the end of the
                                    day, your experience is what matters most.
                                </Typography>
                                <br />
                                <Typography
                                    variant="body1"
                                    component="h5"
                                    className={`${classes.productDescription}`}
                                    gutterBottom
                                >
                                    Some of these features are more likely than
                                    others. This application was just a learning
                                    experience, so I don't plan to necessarily
                                    implement all of these, unless I get around
                                    to it.
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                sm={12}
                                md={9}
                                spacing={1}
                            >
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card elevation={1}>
                                        <div className={classes.cardHeader}>
                                            User creation
                                        </div>
                                        <CardContent>
                                            <Typography
                                                variant="body1"
                                                component="p"
                                            >
                                                Create an account and sign in
                                                and out. The app uses local
                                                storage to store a JwT token for
                                                authentication and redirecting
                                                if accessing pages the user is
                                                not allowed.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card elevation={1}>
                                        <div className={classes.cardHeader}>
                                            User creation
                                        </div>
                                        <CardContent>
                                            <Typography
                                                variant="body1"
                                                component="p"
                                            >
                                                Create an account and sign in
                                                and out. The app uses local
                                                storage to store a JwT token for
                                                authentication and redirecting
                                                if accessing pages the user is
                                                not allowed.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card elevation={1}>
                                        <div className={classes.cardHeader}>
                                            User creation
                                        </div>
                                        <CardContent>
                                            <Typography
                                                variant="body1"
                                                component="p"
                                            >
                                                Create an account and sign in
                                                and out. The app uses local
                                                storage to store a JwT token for
                                                authentication and redirecting
                                                if accessing pages the user is
                                                not allowed.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div>
                            <Grid container spacing={2}></Grid>
                        </div>
                    </div>
                </Container>
            </div>
            <PublicFooter />
        </>
    );
};
