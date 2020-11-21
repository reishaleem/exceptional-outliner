import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import makeStyles from "@material-ui/styles/makeStyles";
import Typed from "react-typed";

import CircularCard from "../../../molecules/CirclularCard/CircularCard";
import Footer from "../../../organisms/Footer/Footer";
import Navbar from "../../../organisms/Navbar/Public/Navbar";
import OverlayImage from "../../../atoms/OverlayImage/OverlayImage";

import OnePiece from "../../../../images/onepieceworld.jpg";
import { Link } from "react-router-dom";
import AuthService from "../../../../services/auth.service";

const useStyles = makeStyles(() => ({
    positionInTheDistance: {
        position: "absolute",
        top: "30%",
        right: "30%",
    },
    alignBottom: {
        position: "absolute",
        bottom: 0,
    },
}));

const Home: React.FC = () => {
    const classes = useStyles();

    const currentUser = AuthService.getCurrentUser();
    const loggedIn = AuthService.isLoggedIn();

    return (
        <>
            <OverlayImage image={OnePiece} fullPage>
                <Navbar
                    transparent
                    userLoggedIn={loggedIn}
                    userName={currentUser ? currentUser.name : "N/A"}
                />
                <div className={classes.positionInTheDistance}>
                    <Typography variant="h3" component="h1">
                        Here is some text
                    </Typography>
                    <Typography variant="h4" component="h2">
                        And some more
                    </Typography>
                    <Typography variant="h4" component="h2">
                        and more
                    </Typography>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        component={Link}
                        to="/register"
                    >
                        Start your journey
                    </Button>
                </div>
                <Box position="absolute" mr="50%" ml="50%" bottom={0} mb={1}>
                    <IconButton
                        aria-label="scroll-arrow"
                        color="primary"
                        onClick={() => {
                            if (document.getElementById("main")) {
                                document
                                    .getElementById("main")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }
                        }}
                    >
                        <ArrowDownwardIcon fontSize="large" />
                    </IconButton>
                </Box>
            </OverlayImage>
            <Box p={1} id="main">
                <Container>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h3" component="h2">
                                User driven features for anyone with{" "}
                                <Typed
                                    strings={[
                                        "a thought",
                                        "an idea",
                                        "an imagination",
                                    ]}
                                    typeSpeed={100}
                                    backSpeed={100}
                                    backDelay={1500}
                                    smartBackspace={false}
                                    showCursor={false}
                                />
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} sm={12} md={6}>
                            <Grid item xs={12} sm={12} md={8}>
                                <CircularCard
                                    title="Build"
                                    body="Build your character from scratch, your
                                        way. Create questionnaires for yourself
                                        to answer, begin editing a wiki-styled
                                        page to flesh out the details, go
                                        straight to character design, or just
                                        open a blank sheet and write down every
                                        thought that comes to mind. Whatever
                                        suits your style, you can find it here."
                                    size="300px"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} />
                            <Grid item xs={12} sm={12} md={4}>
                                <CircularCard
                                    title="Build"
                                    body="Build your character from scratch, your
                                        way. Create questionnaires for yourself
                                        to answer, begin editing a wiki-styled
                                        page to flesh out the details, go
                                        straight to character design, or just
                                        open a blank sheet and write down every
                                        thought that comes to mind. Whatever
                                        suits your style, you can find it here."
                                    size="200px"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                                <CircularCard
                                    title="Build"
                                    body="Build your character from scratch, your
                                        way. Create questionnaires for yourself
                                        to answer, begin editing a wiki-styled
                                        page to flesh out the details, go
                                        straight to character design, or just
                                        open a blank sheet and write down every
                                        thought that comes to mind. Whatever
                                        suits your style, you can find it here."
                                    size="250px"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Home;
