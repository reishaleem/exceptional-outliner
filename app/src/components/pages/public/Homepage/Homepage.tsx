import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import BuildIcon from "@material-ui/icons/Build";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";
import makeStyles from "@material-ui/styles/makeStyles";

import TestImage from "../../../../images/landing-bg.jpg";
import OnePiece from "../../../../images/onepieceworld.jpg";
import PublicFooter from "../../../molecules/Footer/PublicFooter";
import PublicNavbar from "../../../molecules/Navbar/PublicNavbar/PublicNavbar";
import { Link } from "react-router-dom";

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
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
    },
    productDescription: {
        color: "#999",
    },
    fluidImage: {
        maxWidth: "100%",
        height: "auto",
        verticalAlign: "middle",
        borderStyle: "none",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
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
            >
                <Container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography
                            variant="h2"
                            component="h2"
                            className={classes.title}
                        >
                            The Exceptional Outliner
                        </Typography>
                        <Typography
                            variant="h5"
                            className={classes.subtitle}
                            gutterBottom
                        >
                            The ultimate outlining tool.
                        </Typography>
                        <Link to={"/register"} className={classes.link}>
                            <Button
                                color="secondary"
                                variant="contained"
                                size="large"
                            >
                                Create your free account
                            </Button>
                        </Link>
                    </Grid>
                </Container>
            </div>
            <div className={`${classes.mainRaised} ${classes.main}`}>
                <Container>
                    <div className={`${classes.section}`}>
                        <Grid container justify="center">
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography
                                    variant="h3"
                                    component="h3"
                                    align="center"
                                    className={`${classes.productTitle}`}
                                >
                                    What We Offer
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="h5"
                                    align="center"
                                    className={`${classes.productDescription}`}
                                >
                                    The Exceptional Outliner provides an
                                    outlining experience that is tailored to
                                    whatever process you follow. With
                                    wiki-styled pages, link together different
                                    locations, characters, magic systems, and
                                    much more, to create a cohesive and
                                    navigable world for your story. Write
                                    outlines for characters and events, design
                                    characters, draw maps, and so much more. Or,
                                    just go straight into a manuscript and start
                                    writing chapter 1. Our goal is to be
                                    different from the others, to stand above
                                    the rest. To truly be <i>Exceptional</i>.
                                </Typography>
                            </Grid>
                        </Grid>
                        <div>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography
                                                variant="h4"
                                                component="h2"
                                                align="center"
                                                gutterBottom
                                            >
                                                <BuildIcon fontSize="large" />
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                component="h2"
                                                align="center"
                                                gutterBottom
                                            >
                                                Build your character (WIP)
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                component="p"
                                                align="center"
                                            >
                                                Build your character from
                                                scratch, your way. Create
                                                questionnaires for yourself to
                                                answer, begin editing a
                                                wiki-styled page to flesh out
                                                the details, go straight to
                                                character design, or just open a
                                                blank sheet and write down every
                                                thought that comes to mind.
                                                Whatever suits your style, you
                                                can find it here.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography
                                                variant="h4"
                                                component="h2"
                                                align="center"
                                                gutterBottom
                                            >
                                                <SearchIcon fontSize="large" />
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                component="h2"
                                                align="center"
                                                gutterBottom
                                            >
                                                Find inspiration (WIP)
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                component="p"
                                                align="center"
                                            >
                                                Use ready-made character sheets
                                                provided by us and other users
                                                to get going, explore other
                                                published characters from the
                                                community, or use the Generator
                                                to get names, weapons, a prompt
                                                to start with, and countless
                                                other ideas to create unique
                                                characters for your story.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography
                                                variant="h4"
                                                component="h2"
                                                align="center"
                                                gutterBottom
                                            >
                                                <CreateIcon fontSize="large" />
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                component="h2"
                                                align="center"
                                                gutterBottom
                                            >
                                                Plan, Organize, and Write (WIP)
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                component="p"
                                                align="center"
                                            >
                                                Begin crafting the perfect
                                                character arc with manuscript
                                                editors as if you were writing a
                                                novel. Create your own beats or
                                                use one of the development
                                                sheets to map out your character
                                                and their development in any way
                                                you can imagine.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <Divider />
                    <div className={`${classes.section}`}>
                        <Grid container justify="center">
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography
                                    variant="h3"
                                    component="h3"
                                    align="center"
                                    className={`${classes.productTitle}`}
                                >
                                    Our Culture
                                </Typography>
                            </Grid>
                        </Grid>
                        <div>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6}>
                                    {/* <Typography variant="h4" align="center">
                                        Who we are
                                    </Typography> */}
                                    <Typography variant="body1">
                                        We are story lovers. We love huge worlds
                                        and the countless untold stories within
                                        them. There is nothing like losing
                                        ourselves in the endless seas of the
                                        Grand Line, the secret passageways
                                        within Hogwarts, or the mists of the
                                        Final Empire. And creating these worlds
                                        is equally fun.
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Some writers like to outline every last
                                        detail, from the tragic backstory to the
                                        ultimate victory. Others will simply put
                                        a character in an interesting situation
                                        and see what comes next. Whether you are
                                        the purest gardener or the most
                                        thoughtful architect, or anywhere
                                        inbetween, this is the place for you.
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Because what we love most is that we are{" "}
                                        <i>all</i> capable of inventing our own,
                                        mythical story. We just need a place to
                                        do it. So, we created the Exceptional
                                        Outliner.
                                    </Typography>

                                    {/* <Divider style={{ margin: "15px" }} />
                                    <Typography variant="h4" align="center">
                                        What we do
                                    </Typography>
                                    <Typography variant="body1">
                                        I am a software Engineer studying at
                                        Ohio State University. My goal was to
                                        create this application to combine
                                        features from different apps like{" "}
                                        <a href="https://plotfactory.com">
                                            Plot Factory
                                        </a>{" "}
                                        and{" "}
                                        <a href="https://worldanvil.com">
                                            World Anvil
                                        </a>
                                        . Hopefully when this is complete, it
                                        will provide a nice combination of world
                                        building, outlining, and writing. Check
                                        out the{" "}
                                        <a href="https://github.com/reishaleem/exceptional-outliner">
                                            repository
                                        </a>{" "}
                                        on GitHub to see more information on how
                                        this app was made.
                                    </Typography> */}
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <img
                                        src={OnePiece}
                                        alt="Fantasy World"
                                        className={classes.fluidImage}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Container>
            </div>
            <PublicFooter />
        </>
    );
};
