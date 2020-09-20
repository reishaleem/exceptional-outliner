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
    Button,
    GridList,
    GridListTile,
    CardHeader,
} from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import BuildIcon from "@material-ui/icons/Build";
import CreateIcon from "@material-ui/icons/Create";
import Typewriter from "typewriter-effect";

import img from "../../../../images/notebook-pen-desk.jpg";
import FeatureImage from "../../../../images/story-to-life.jpg";
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
        color: "white",
        width: "100%",
        paddingTop: "3em",
    },
    underlinedHeader: {
        display: "inline-block",
        borderBottom: "2px solid #fff",
        paddingBottom: "1rem",
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
            <Navbar />
            <Grid container spacing={3}>
                <Grid container item md={12} style={{ maxHeight: "45vh" }}>
                    <OverlayImage image={FeatureImage}>
                        <div className={classes.overlay}>
                            <Grid container item md={12}>
                                <Grid item md={2}></Grid>
                                <Grid container item md={4}>
                                    <h1 className={classes.underlinedHeader}>
                                        Bring your ideas to life
                                    </h1>

                                    <Typography variant="body1" component="p">
                                        Write faster, organize thoughts, find
                                        new inspirations, and create something
                                        Exceptional.
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container item md={12}>
                                <Grid
                                    item
                                    md={4}
                                    style={{
                                        textAlign: "right",
                                        marginLeft: "50%",
                                    }}
                                >
                                    <h1 className={classes.underlinedHeader}>
                                        Feature Rich Outlining and Writing
                                    </h1>
                                    <Typography variant="body1" component="p">
                                        A platform so you can enjoy what you are
                                        writing, which means your readers will,
                                        too.
                                    </Typography>
                                </Grid>
                                <Grid item md={2}></Grid>
                            </Grid>
                        </div>
                    </OverlayImage>
                </Grid>
                <Container>
                    <Grid
                        container
                        item
                        md={12}
                        spacing={1}
                        className={classes.aboutDesc}
                    >
                        <Grid item md={12}>
                            <h1>Completed Features</h1>
                            <hr />
                        </Grid>
                        <Grid container item md={3} direction="column">
                            <Grid item md={12}>
                                <p>
                                    Features are designed to provide a seamless
                                    experience for both casual and dedicated
                                    writers. Whether you are creating an epic
                                    second world or your story takes place
                                    within a single room, these features aim to
                                    bring you an easy and fun experience.
                                </p>

                                <Button
                                    color="secondary"
                                    variant="contained"
                                    disableElevation
                                >
                                    {" CREATE YOUR ACCOUNT"}
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container item md={9} spacing={3}>
                            <Grid item md={4}>
                                <Card variant="outlined">
                                    <div className={classes.cardHeader}>
                                        User creation
                                    </div>
                                    <CardContent>
                                        <Typography
                                            variant="body1"
                                            component="p"
                                        >
                                            Create an account and sign in and
                                            out. The app uses local storage to
                                            store a JwT token for authentication
                                            and redirecting if accessing pages
                                            the user is not allowed.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        md={12}
                        spacing={1}
                        className={classes.aboutDesc}
                    >
                        <Grid item md={12}>
                            <h1>Work In Progress</h1>
                            <hr />
                        </Grid>
                        <Grid container item md={3} direction="column">
                            <Grid item md={12}>
                                <Typography variant="body1" component="p">
                                    Our goal is to provide the easiest and most
                                    enjoyable experience around. We are
                                    continously improving to ensure we meet this
                                    goal. All user feedback is taken seriously
                                    and appreciated, because at the end of the
                                    day, your experience is what matters most.
                                </Typography>
                                <br />
                                <Typography variant="body1" component="p">
                                    Some of these features are more likely than
                                    others. This application was just a learning
                                    experience, so I don't plan to necessarily
                                    implement all of these, unless I get around
                                    to it.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item md={9} spacing={3}>
                            <Grid item md={4}>
                                <Card variant="outlined">
                                    <div className={classes.cardHeader}>
                                        Online Editor
                                    </div>
                                    <CardContent>
                                        <Typography
                                            variant="body1"
                                            component="p"
                                        >
                                            Fully featured editor for actually
                                            writing manuscripts and outlined.
                                            Right now, the editor is only being
                                            used in the Wiki creation, and it
                                            can still use some work.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
};
