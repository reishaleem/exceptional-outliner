import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import makeStyles from "@material-ui/styles/makeStyles";

import CircularCard from "../../../molecules/CirclularCard/CircularCard";
import Footer from "../../../molecules/Footer/Footer";
import Navbar from "../../../molecules/Navbar/Public/Navbar";
import OverlayImage from "../../../atoms/OverlayImage/OverlayImage";

import OnePiece from "../../../../images/onepieceworld.jpg";

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

    return (
        <>
            <OverlayImage image={OnePiece} fullPage>
                <Navbar transparent />
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
                    >
                        Start your journey
                    </Button>
                </div>
                <Box position="absolute" mr="50%" ml="50%" bottom={0} mb={1}>
                    <IconButton aria-label="scroll-arrow" color="primary">
                        <ArrowDownwardIcon fontSize="large" />
                    </IconButton>
                </Box>
            </OverlayImage>
            <Grid container>
                <Container>
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
                                size="500px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} />
                        <Grid item xs={12} sm={12} md={4} />
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
                                size="400px"
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
                                size="400px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} />
                    </Grid>
                </Container>
            </Grid>
            <Footer />
        </>
    );
};

export default Home;
