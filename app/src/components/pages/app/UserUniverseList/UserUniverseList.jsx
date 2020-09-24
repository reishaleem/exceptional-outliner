import React, { useEffect, useState } from "react";
import AppWrapper from "../../../molecules/Wrapper/AppWrapper";
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
    InputLabel,
    FormControlLabel,
    InputBase,
    MenuItem,
    CardActions,
    IconButton,
    Tooltip,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { fade, makeStyles } from "@material-ui/core/styles";
import moment from "moment";

import SearchIcon from "@material-ui/icons/Search";

import { Formik, Form, Field } from "formik";
import { TextField, Checkbox as FormCheckBox } from "formik-material-ui";
import { Link, useHistory } from "react-router-dom";
import UniverseService from "../../../../services/universe.service";
import ModalForm from "../../../molecules/ModalForm/DeleteUniverseModal";
import DeleteUniverseModal from "../../../molecules/ModalForm/DeleteUniverseModal";

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
    },
    cardFooter: {
        marginTop: "0",
        backgroundColor: "rgba(0,0,0,.03)",
        borderTop: "1px solid rgba(0,0,0,.125)",
    },
    button: {
        margin: theme.spacing(1),
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
    link: {
        textDecoration: "none",
        color: "inherit",
    },
}));

export default () => {
    const classes = useStyles();
    const history = useHistory();

    const currentUserId = "5f6b9d1ad980b3346a4a329d"; // needs to be changed when jwt is done

    const [universes, setUniverses] = useState([]);

    const [universesLoaded, setUniversesLoaded] = useState(false);

    useEffect(() => {
        UniverseService.getUserUniverseList(currentUserId).then((response) => {
            setUniverses(response.data);
            setUniversesLoaded(true);
        });
    }, [currentUserId]);
    console.log(universes);

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

    function handleUniverseDelete(ownerId, universeId) {
        UniverseService.deleteUniverse(ownerId, universeId).then(
            (response) => {
                // setMessage(response.data.message);
                // setSuccessful(true);
                // logIn();
                //history.push("/about"); // for some reason...we aren't logged in at this point. It's like login isn't even being calleed...
                //window.location.reload();
                console.log(response);
            },
            (error) => {
                // const resMessage =
                //     (error.response &&
                //         error.response.data &&
                //         error.response.data.message) ||
                //     error.message ||
                //     error.toString();

                console.log(error);
            }
        );
    }

    return (
        <>
            <AppWrapper>
                <Grid container spacing={3}>
                    <Container>
                        <Grid container item md={12} spacing={3}>
                            <Grid container item md={3}>
                                <Grid item md={12}></Grid>
                                <Grid item md={12}></Grid>
                                <Grid item md={12}>
                                    <Link
                                        to={"/app/universes/new"}
                                        className={classes.link}
                                    >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disableElevation
                                            fullWidth
                                        >
                                            Create Universe
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
                                        onSubmit={(
                                            values,
                                            { setSubmitting }
                                        ) => {
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
                                                            root:
                                                                classes.inputRoot,
                                                        }}
                                                        inputProps={{
                                                            "aria-label":
                                                                "search",
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
                                        onSubmit={(
                                            values,
                                            { setSubmitting }
                                        ) => {
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
                            </Grid>
                            <Grid container item md={9} direction="column">
                                <Grid container item md={12} direction="row">
                                    <Grid item md={12}>
                                        <Typography
                                            gutterBottom
                                            variant="h4"
                                            component="h2"
                                        >
                                            Universes
                                        </Typography>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Divider
                                            style={{ marginBottom: "10px" }}
                                        />
                                    </Grid>

                                    <Grid item md={12}>
                                        {universesLoaded && (
                                            <>
                                                {universes.map(
                                                    (universe, i) => {
                                                        return (
                                                            <Card
                                                                variant="outlined"
                                                                style={{
                                                                    width:
                                                                        "100%",
                                                                    marginBottom:
                                                                        "10px",
                                                                }}
                                                                key={i}
                                                            >
                                                                <Link
                                                                    to={{
                                                                        pathname: `/app/universes/${universe._id}`,
                                                                        state: {
                                                                            universeId:
                                                                                universe._id,
                                                                        },
                                                                    }}
                                                                    className={
                                                                        classes.link
                                                                    }
                                                                >
                                                                    <Typography
                                                                        gutterBottom
                                                                        variant="h5"
                                                                        component="h2"
                                                                        className={
                                                                            classes.cardHeader
                                                                        }
                                                                    >
                                                                        {
                                                                            universe.name
                                                                        }
                                                                    </Typography>
                                                                </Link>

                                                                <CardContent>
                                                                    <Typography
                                                                        variant="body1"
                                                                        component="p"
                                                                    >
                                                                        {
                                                                            universe.description
                                                                        }
                                                                        <br />
                                                                        maybe
                                                                        tags,
                                                                        other
                                                                        stuff.
                                                                        <br />
                                                                        Stuff
                                                                    </Typography>
                                                                </CardContent>
                                                                <CardActions
                                                                    className={
                                                                        classes.cardFooter
                                                                    }
                                                                >
                                                                    <Typography
                                                                        variant="body2"
                                                                        style={{
                                                                            flexGrow: 1,
                                                                        }}
                                                                    >
                                                                        Created
                                                                        -{" "}
                                                                        {moment(
                                                                            universe.createdAt
                                                                        ).format(
                                                                            "h:mma [on] MMMM Do, YYYY"
                                                                        )}{" "}
                                                                        |
                                                                        Updated
                                                                        -{" "}
                                                                        {moment(
                                                                            universe.updatedAt
                                                                        ).format(
                                                                            "MMMM Do, YYYY"
                                                                        )}
                                                                    </Typography>
                                                                    <Tooltip
                                                                        title="Edit"
                                                                        placement="top"
                                                                    >
                                                                        <Link
                                                                            to={{
                                                                                pathname: `/app/universes/${universe._id}`,
                                                                                state: {
                                                                                    universeId:
                                                                                        universe._id,
                                                                                },
                                                                            }}
                                                                            className={
                                                                                classes.link
                                                                            }
                                                                        >
                                                                            <IconButton aria-label="edit">
                                                                                <CreateIcon fontSize="small" />
                                                                            </IconButton>
                                                                        </Link>
                                                                    </Tooltip>

                                                                    <DeleteUniverseModal
                                                                        universeName={
                                                                            universe.name
                                                                        }
                                                                        ownerId={
                                                                            currentUserId
                                                                        }
                                                                        universeId={
                                                                            universe._id
                                                                        }
                                                                        handleSubmit={
                                                                            handleUniverseDelete
                                                                        }
                                                                    />
                                                                </CardActions>
                                                            </Card>
                                                        );
                                                    }
                                                )}
                                            </>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </AppWrapper>
        </>
    );
};
