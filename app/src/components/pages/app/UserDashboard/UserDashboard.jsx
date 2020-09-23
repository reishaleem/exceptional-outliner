import React, { useState, useEffect } from "react";
import Navbar from "../../../atoms/AppNavbar/Navbar";
import AppWrapper from "../../../molecules/Wrapper/AppWrapper";
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
    ListItemAvatar,
    Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ImageIcon from "@material-ui/icons/Image";

import WikiService from "../../../../services/wiki.service";

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

    const currentUserId = "5f6b9d1ad980b3346a4a329d"; // needs to be changed when jwt is done

    const [recentlyEdited, setRecentlyEdited] = useState([]);

    // later, edit the list of fetched things so that it returns all universes and wikis, then compares their updated dates. We can just send custom
    // objects from the back end to get it to work...then we can display them in the list and either have a universe icon or wiki icon, plus the details.
    // maybe when you hover over the icon, it says universe: universeName, just for Wikis.

    useEffect(() => {
        WikiService.getWikisByUser(currentUserId).then((response) => {
            let wikis = response.data;
            wikis.sort((a, b) => {
                const d1 = new Date(a.wiki.updatedAt);
                const d2 = new Date(b.wiki.updatedAt);
                if (d1 >= d2) {
                    return -1;
                } else {
                    return 1;
                }
            });
            setRecentlyEdited(wikis);
        });
    }, [currentUserId]);
    console.log(recentlyEdited);

    return (
        <>
            <AppWrapper>
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
                                        <Link
                                            to={{
                                                pathname: "/app/wikis/new",
                                                state: {
                                                    universe: {},
                                                },
                                            }}
                                            className={classes.link}
                                        >
                                            <Button
                                                variant="outlined"
                                                className={
                                                    classes.quickCreateButton
                                                }
                                                startIcon={<AddIcon />}
                                            >
                                                Wiki
                                            </Button>
                                        </Link>
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

                                    <List>
                                        {recentlyEdited.map((item, i) => {
                                            return (
                                                <ListItem button key={i}>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <ImageIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={item.wiki.name}
                                                        secondary={
                                                            item.wiki.updatedAt
                                                        }
                                                    />
                                                </ListItem>
                                            );
                                        })}
                                    </List>
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
            </AppWrapper>
        </>
    );
};
