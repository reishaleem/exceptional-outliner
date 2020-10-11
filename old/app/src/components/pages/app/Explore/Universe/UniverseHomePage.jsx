import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ViewPageWrapper from "../../../../molecules/Wrapper/ViewPageWrapper";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    CardMedia,
    ButtonGroup,
    CardHeader,
} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
import OnePiece from "../../../../../images/onepiece_arcs.jpg";

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
        textAlign: "center",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        width: 151,
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <ViewPageWrapper>
            <Grid item md={12}>
                <Typography variant="h4" component="h2">
                    Home
                </Typography>
            </Grid>
            <Grid item md={12}>
                <Divider />
            </Grid>

            <Grid container item md={8} spacing={1}>
                <Grid item md={12}>
                    <Card variant="outlined">
                        <div className={classes.cardHeader}>
                            Welcome to Universe Name
                        </div>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image={OnePiece}
                            title="Temp pic"
                        />
                        <CardContent>
                            <Typography variant="body1" component="p">
                                Insert the universe welcome message (need to
                                add)
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={12}>
                    <Card variant="outlined">
                        <div className={classes.cardHeader}>
                            Featured Wiki of the Day
                        </div>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    Live From Space
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="textSecondary"
                                >
                                    Mac Miller
                                </Typography>
                            </CardContent>
                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={OnePiece}
                            title="Live from space album cover"
                        />
                    </Card>
                </Grid>
            </Grid>
            <Grid container item md={4}>
                <Grid item md={12}>
                    <Card variant="outlined">
                        <div className={classes.cardHeader}>Content</div>

                        <ButtonGroup fullWidth>
                            <Button
                                variant="default"
                                style={{ padding: "10px 20px" }}
                            >
                                People
                            </Button>
                            <Button
                                variant="default"
                                style={{ padding: "10px 20px" }}
                            >
                                Groups
                            </Button>
                            <Button
                                variant="default"
                                style={{ padding: "10px 20px" }}
                            >
                                One
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup fullWidth>
                            <Button
                                variant="default"
                                style={{ padding: "10px 20px" }}
                            >
                                World
                            </Button>
                            <Button
                                variant="default"
                                style={{ padding: "10px 20px" }}
                            >
                                Countries
                            </Button>
                            <Button
                                variant="default"
                                style={{ padding: "10px 20px" }}
                            >
                                Cultures
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup fullWidth>
                            <Button
                                variant="default"
                                style={{ padding: "10px 20px" }}
                            >
                                Animals
                            </Button>
                            <Button
                                variant="default"
                                style={{ padding: "10px 20px" }}
                            >
                                Plants
                            </Button>
                            <Button
                                variant="default"
                                style={{ padding: "10px 20px" }}
                            >
                                Magic
                            </Button>
                        </ButtonGroup>
                    </Card>
                </Grid>
            </Grid>
        </ViewPageWrapper>
    );
};
