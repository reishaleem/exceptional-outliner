import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../../atoms/PublicNavbar/Navbar";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    CardMedia,
} from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import BuildIcon from "@material-ui/icons/Build";
import CreateIcon from "@material-ui/icons/Create";
import Typewriter from "typewriter-effect";

import img from "../../../../images/notebook-pen-desk.jpg";
import OnePiece from "../../../../images/onepieceworld.jpg";
import OverlayImage from "../../../atoms/OverlayImage/OverlayImage";

const useStyles = makeStyles((theme) => ({
    pad: {
        paddingLeft: "15px",
        paddingRight: "15px",
    },
    typewriter: {
        fontSize: "54px",
        marginBottom: "3rem",
        fontWeight: "lighter",
    },
    fluidImage: {
        maxWidth: "100%",
        height: "auto",
        verticalAlign: "middle",
        borderStyle: "none",
    },
    aboutDesc: {
        padding: "5rem",
    },
    overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "white",
        width: "100%",
        paddingTop: "3em",
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Grid container spacing={3}>
                <Grid
                    item
                    md={12}
                    style={{ maxHeight: "45vh", textAlign: "center" }}
                >
                    <OverlayImage image={img}>
                        <div className={classes.overlay}>
                            <Typography
                                variant="h4"
                                className={classes.typewriter}
                            >
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Worldbuilding",
                                            "Writing",
                                            "Storytelling",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Typography>
                            <p>We love it</p>
                        </div>
                    </OverlayImage>
                </Grid>
                <Container>
                    <Grid
                        container
                        item
                        md={12}
                        spacing={3}
                        className={classes.aboutDesc}
                    >
                        <Grid container item md={6}>
                            <Grid item md={12}>
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
                            </Grid>
                            <Grid item md={12}>
                                <hr></hr>
                            </Grid>
                            <Grid item md={12}>
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
                        </Grid>
                        <Grid container item md={6}>
                            <img
                                src={OnePiece}
                                className={classes.fluidImage}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
};
