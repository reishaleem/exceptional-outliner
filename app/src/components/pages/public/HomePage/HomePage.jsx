import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../../atoms/PublicNavbar/Navbar";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
} from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import BuildIcon from "@material-ui/icons/Build";
import CreateIcon from "@material-ui/icons/Create";
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
                <Grid container item md={12}>
                    <Grid container item md={12}>
                        <Container>
                            <Grid container spacing={3}>
                                <Grid item md={4}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h4"
                                                component="h2"
                                                align="center"
                                            >
                                                <PublicIcon fontSize="large" />
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                                align="center"
                                            >
                                                Expand your world
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                component="p"
                                            >
                                                With wiki-like pages, create and
                                                expand your one-of-a-kind world.
                                                Build your characters,
                                                countries, magic, and more from
                                                scratch, or use the provided
                                                questionnaires to get your brain
                                                working!
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={4}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h4"
                                                component="h2"
                                                align="center"
                                            >
                                                <BuildIcon fontSize="large" />
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                                align="center"
                                            >
                                                Generator (WIP)
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                component="p"
                                            >
                                                Create countless ideas and names
                                                for anything, including
                                                characters, locations, and more.
                                                You can corrupt generated words
                                                and provide language root
                                                options, among many more
                                                features!
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={4}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h4"
                                                component="h2"
                                                align="center"
                                            >
                                                <CreateIcon fontSize="large" />
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                                align="center"
                                            >
                                                Plan, Organize, Write (WIP)
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                component="p"
                                            >
                                                Outline your story, or start
                                                from the first chapter. Take
                                                advantage of the script and
                                                storyboard functions for comics
                                                or screenplays. Write high
                                                quality stories with our rich
                                                manuscript editor.fdsfadsa
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
