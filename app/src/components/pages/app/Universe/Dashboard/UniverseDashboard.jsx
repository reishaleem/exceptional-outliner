import React, { useState, useEffect } from "react";
import AppWrapper from "../../../../molecules/Wrapper/AppWrapper";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import {
    Container,
    Card,
    CardContent,
    Typography,
    Divider,
    Button,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    CardActions,
    IconButton,
    Tooltip,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { fade, makeStyles } from "@material-ui/core/styles";
import moment from "moment";

import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import { TextField, Checkbox as FormCheckBox } from "formik-material-ui";
import UniverseWrapper from "../../../../molecules/Wrapper/UniverseWrapper";
import UniverseService from "../../../../../services/universe.service";
import WikiService from "../../../../../services/wiki.service";
import DeleteWikiModal from "../../../../molecules/ModalForm/DeleteWikiModal";

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
        color: "inherit",
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        // marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "auto",
        },
    },
    searchIcon: {
        //padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
    },
}));

export default (props) => {
    const classes = useStyles();

    const currentUserId = "5f6b9d1ad980b3346a4a329d"; // needs to be changed when jwt is done
    const { universeId } = useParams();

    const [wikis, setWikis] = useState([]);

    const [wikisLoaded, setWikisLoaded] = useState(true);

    useEffect(() => {
        WikiService.getWikisByUniverse(currentUserId, universeId).then(
            (response) => {
                setWikis(response.data);
                setWikisLoaded(true);
            }
        );
    }, [currentUserId, universeId]);
    console.log(wikis);

    function handleSubmit(values, setSubmitting) {
        // UserService.login(
        //     values.username,

        //     values.password
        // ).then(
        //     (response) => {
        //         // setMessage(response.data.message);
        //         // setSuccessful(true);
        //         // logIn();
        //         //history.push("/about"); // for some reason...we aren't logged in at this point. It's like login isn't even being calleed...
        //         //window.location.reload();
        //         console.log(response);
        //     },
        //     (error) => {
        //         // const resMessage =
        //         //     (error.response &&
        //         //         error.response.data &&
        //         //         error.response.data.message) ||
        //         //     error.message ||
        //         //     error.toString();

        //         console.log(error);
        //     }
        // );
        setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
        }, 500);
    }

    function handleWikiDelete(ownerId, universeId, wikiId) {
        // UniverseService.deleteUniverse(ownerId, universeId, wikiId).then(
        //     (response) => {
        //         // setMessage(response.data.message);
        //         // setSuccessful(true);
        //         // logIn();
        //         //history.push("/about"); // for some reason...we aren't logged in at this point. It's like login isn't even being calleed...
        //         //window.location.reload();
        //         console.log(response);
        //     },
        //     (error) => {
        //         // const resMessage =
        //         //     (error.response &&
        //         //         error.response.data &&
        //         //         error.response.data.message) ||
        //         //     error.message ||
        //         //     error.toString();

        //         console.log(error);
        //     }
        // );
        console.log("Works");
    }

    return (
        <>
            <UniverseWrapper universeDropdownStartOpen={true}>
                <Grid container spacing={3}>
                    <Container>
                        <Grid container item md={12} spacing={3}>
                            <Grid item md={2}>
                                <Link
                                    to={{
                                        pathname: "/app/wikis/new",
                                        state: { universe: "Narnia" }, // this will be the universe object itself
                                    }}
                                    className={classes.link}
                                >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disableElevation
                                        fullWidth
                                    >
                                        Create Wiki
                                    </Button>
                                </Link>
                                <br />
                                <br />
                                <Formik
                                    initialValues={{
                                        name: "",
                                    }}
                                    validate={(values) => {
                                        const errors = {};

                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        handleSubmit(values, setSubmitting);
                                    }}
                                >
                                    {({
                                        submitForm,
                                        isSubmitting,
                                        touched,
                                        errors,
                                    }) => (
                                        <Form>
                                            <div className={classes.search}>
                                                <div
                                                    className={
                                                        classes.searchIcon
                                                    }
                                                >
                                                    <SearchIcon />
                                                </div>
                                                <Field
                                                    component={TextField}
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    placeholder="Search..."
                                                    fullWidth
                                                    classes={{
                                                        root: classes.inputRoot,
                                                    }}
                                                    inputProps={{
                                                        "aria-label": "search",
                                                        className: `${classes.inputInput}`,
                                                    }}
                                                />
                                            </div>
                                        </Form>
                                    )}
                                </Formik>

                                <Formik
                                    initialValues={{
                                        name: "",
                                    }}
                                    validate={(values) => {
                                        const errors = {};

                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        handleSubmit(values, setSubmitting);
                                    }}
                                >
                                    {({
                                        submitForm,
                                        isSubmitting,
                                        touched,
                                        errors,
                                    }) => (
                                        <Form>
                                            <Field
                                                component={TextField}
                                                name="sortBy"
                                                id="sortBy"
                                                type="text"
                                                select
                                                fullWidth
                                                margin="normal"
                                                label="Sort by"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                variant="standard"
                                                defaultValue="Most recent"
                                            >
                                                {[
                                                    "Most recent",
                                                    "Name (A-Z)",
                                                    "Name (Z-A)",
                                                    "Newest",
                                                ].map((option) => (
                                                    <MenuItem
                                                        key={option}
                                                        value={option}
                                                    >
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </Field>
                                        </Form>
                                    )}
                                </Formik>
                                <br />
                                <br />
                            </Grid>
                            <Grid container item md={6}>
                                <Grid container item md={12}>
                                    <Grid item md={12}>
                                        <Typography
                                            gutterBottom
                                            variant="h4"
                                            component="h2"
                                        >
                                            Wikis
                                        </Typography>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Divider
                                            style={{ marginBottom: "10px" }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item md={12}>
                                    {wikisLoaded && (
                                        <>
                                            {wikis.map((wiki, i) => {
                                                return (
                                                    <Card
                                                        variant="outlined"
                                                        style={{
                                                            width: "100%",
                                                            marginBottom:
                                                                "10px",
                                                        }}
                                                        key={i}
                                                    >
                                                        <CardContent>
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                }}
                                                            >
                                                                <Typography
                                                                    variant="h5"
                                                                    component="h2"
                                                                    style={{
                                                                        flexGrow: 1,
                                                                    }}
                                                                >
                                                                    {wiki.name}
                                                                </Typography>
                                                                <Tooltip
                                                                    title="View"
                                                                    placement="top"
                                                                >
                                                                    <Link
                                                                        to={`#`}
                                                                        className={
                                                                            classes.link
                                                                        }
                                                                    >
                                                                        <IconButton aria-label="view">
                                                                            <VisibilityIcon fontSize="small" />
                                                                        </IconButton>
                                                                    </Link>
                                                                </Tooltip>
                                                                <Tooltip
                                                                    title="Edit"
                                                                    placement="top"
                                                                >
                                                                    <Link
                                                                        to={`/app/universes/${universeId}/wikis/${wiki._id}/edit`}
                                                                        className={
                                                                            classes.link
                                                                        }
                                                                    >
                                                                        <IconButton aria-label="edit">
                                                                            <CreateIcon fontSize="small" />
                                                                        </IconButton>
                                                                    </Link>
                                                                </Tooltip>

                                                                <DeleteWikiModal
                                                                    wikiName={
                                                                        wiki.name
                                                                    }
                                                                    ownerId={
                                                                        currentUserId
                                                                    }
                                                                    universeId={
                                                                        universeId
                                                                    }
                                                                    wikiId={
                                                                        wiki._id
                                                                    }
                                                                    handleSubmit={
                                                                        handleWikiDelete
                                                                    }
                                                                />
                                                            </div>

                                                            <Typography
                                                                variant="body1"
                                                                component="p"
                                                            >
                                                                Wiki category
                                                                (character,
                                                                magic, etc.)
                                                            </Typography>
                                                            <span
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    marginBottom:
                                                                        "5px",
                                                                }}
                                                            >
                                                                <DateRangeIcon fontSize="small" />
                                                                <Tooltip
                                                                    title="Last modified"
                                                                    placement="top"
                                                                >
                                                                    <Typography
                                                                        variant="body2"
                                                                        component="p"
                                                                        style={{
                                                                            marginRight:
                                                                                "5px",
                                                                            cursor:
                                                                                "pointer",
                                                                        }}
                                                                    >
                                                                        wiki.updatedAt
                                                                    </Typography>
                                                                </Tooltip>
                                                                <EditLocationIcon fontSize="small" />
                                                                <Tooltip
                                                                    title="Word count"
                                                                    placement="top"
                                                                >
                                                                    <Typography
                                                                        variant="body2"
                                                                        component="p"
                                                                        style={{
                                                                            marginRight:
                                                                                "5px",
                                                                            cursor:
                                                                                "pointer",
                                                                        }}
                                                                    >
                                                                        wiki.body.length
                                                                    </Typography>
                                                                </Tooltip>
                                                            </span>
                                                            <Typography
                                                                variant="body2"
                                                                component="p"
                                                                style={{
                                                                    marginRight:
                                                                        "5px",
                                                                    cursor:
                                                                        "pointer",
                                                                }}
                                                            >
                                                                Maybe some Wiki
                                                                tags, like Work
                                                                In Progress
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                );
                                            })}
                                        </>
                                    )}
                                </Grid>
                            </Grid>
                            <Grid item md={4}>
                                <Card variant="outlined">
                                    <div className={classes.cardHeader}>
                                        Todo list
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
                        </Grid>
                    </Container>
                </Grid>
            </UniverseWrapper>
        </>
    );
};
