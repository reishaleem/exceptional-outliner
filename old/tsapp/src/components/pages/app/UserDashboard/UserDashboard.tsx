import {
    Card,
    CardContent,
    Grid,
    Typography,
    makeStyles,
    Button,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    CircularProgress,
} from "@material-ui/core";
import { AddCircleOutline, Image as ImageIcon } from "@material-ui/icons";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import AuthService from "../../../../services/auth.service";
import AppWrapper from "../../../organisms/Wrappers/AppWrapper";

interface User {
    id: string;
    name: string;
    username: string;
}

interface Wiki {
    name: string;
    updatedAt: string;
}

interface Universe {
    name: string;
    updatedAt: string;
}

interface Item {
    wiki: Wiki;
}

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

    const [recentlyEdited, setRecentlyEdited] = useState([]);
    const [recentlyEditedLoaded, setRecentlyEditedLoaded] = useState(true); // defaulting to true until useEffect is implemented

    const currentUser: User = AuthService.getCurrentUser();
    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <AppWrapper>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                    <Card variant="outlined">
                        <div className={classes.cardHeader}>
                            Recently edited
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Link
                                to="/app/universes/new"
                                className={classes.link}
                            >
                                <Button
                                    variant="outlined"
                                    className={classes.quickCreateButton}
                                    startIcon={<AddCircleOutline />}
                                >
                                    Universe
                                </Button>
                            </Link>
                            <Link to="/app/wikis/new" className={classes.link}>
                                <Button
                                    variant="outlined"
                                    className={classes.quickCreateButton}
                                    startIcon={<AddCircleOutline />}
                                >
                                    Wiki
                                </Button>
                            </Link>
                        </div>

                        <Divider variant="middle" />
                        {recentlyEditedLoaded ? (
                            <List>
                                {recentlyEdited.length > 0 ? (
                                    recentlyEdited.map(
                                        (item: Item, i: number) => {
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
                                        }
                                    )
                                ) : (
                                    <Typography
                                        variant="body2"
                                        component="p"
                                        align="center"
                                    >
                                        No items
                                    </Typography>
                                )}
                            </List>
                        ) : (
                            <CircularProgress />
                        )}
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
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
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="h2"
                                align="center"
                            >
                                Todo List
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="h2"
                                align="center"
                            >
                                Forum
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="h2"
                                align="center"
                            >
                                Discuss
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </AppWrapper>
    );
};
