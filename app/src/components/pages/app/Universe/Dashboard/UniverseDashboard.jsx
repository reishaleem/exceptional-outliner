import React from "react";
import AppWrapper from "../../../../molecules/Wrapper/AppWrapper";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import {
    Container,
    Card,
    CardContent,
    Typography,
    makeStyles,
    Divider,
    Button,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import UniverseWrapper from "../../../../molecules/Wrapper/UniverseWrapper";

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
    quickCreateButton: {
        margin: theme.spacing(1),
    },
    link: {
        textDecoration: "none",
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <>
            <UniverseWrapper>
                <Grid container spacing={3}>
                    <Container>
                        <Grid container item md={12} spacing={3}>
                            <Grid item md={5}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h4"
                                            component="h2"
                                            align="center"
                                        >
                                            Todo list
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
                                            T
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item md={7}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h4"
                                            component="h2"
                                            align="center"
                                        >
                                            Statistics
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
                                            Build your characters, countries,
                                            magic, and more from scratch, or use
                                            the provided questionnaires to get
                                            your brain working!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item md={4}>
                                <Card variant="outlined">
                                    <div className={classes.cardHeader}>
                                        Recently edited
                                    </div>

                                    <div style={{ textAlign: "center" }}>
                                        <Button
                                            variant="outlined"
                                            className={
                                                classes.quickCreateButton
                                            }
                                            startIcon={<AddIcon />}
                                        >
                                            Wiki
                                        </Button>
                                        <Link
                                            to={"/app/universes/new"}
                                            className={classes.link}
                                        >
                                            <Button
                                                variant="outlined"
                                                className={
                                                    classes.quickCreateButton
                                                }
                                                startIcon={<AddIcon />}
                                            >
                                                Universe
                                            </Button>
                                        </Link>
                                    </div>

                                    <Divider variant="middle" />
                                    <CardContent>
                                        <List>
                                            <ListItem button>
                                                <ListItemText primary="Fetch edited stuff"></ListItemText>
                                            </ListItem>
                                        </List>
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
                                            Something else
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
                                            Build your characters, countries,
                                            magic, and more from scratch, or use
                                            the provided questionnaires to get
                                            your brain working!
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
                                            Something
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
                                            Build your characters, countries,
                                            magic, and more from scratch, or use
                                            the provided questionnaires to get
                                            your brain working!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </UniverseWrapper>
        </>
    );
};
