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
    InputLabel,
    FormControlLabel,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField, Checkbox as FormCheckBox } from "formik-material-ui";
import { Link, useHistory, Redirect } from "react-router-dom";
import UniverseService from "../../../../../services/universe.service";
import AuthService from "../../../../../services/auth.service";

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
    button: {
        margin: theme.spacing(1),
    },
}));

export default () => {
    const classes = useStyles();
    const history = useHistory();

    const currentUser = AuthService.getCurrentUser(); // needs to be changed when jwt is done
    if (currentUser === null) {
        return <Redirect to="/login" />;
    }

    function handleSubmit(values, setSubmitting) {
        UniverseService.createUniverse(
            currentUser.id,
            values.name,
            values.description
        ).then(
            (response) => {
                // setMessage(response.data.message);
                // setSuccessful(true);
                // logIn();
                //history.push("/about"); // for some reason...we aren't logged in at this point. It's like login isn't even being calleed...
                //window.location.reload();
                console.log(response);
                history.push({
                    pathname: `/app/universes/${response.data.universe._id}`,
                    state: { universeId: response.data.universe._id },
                });
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
                            <Grid item md={3}>
                                <p>
                                    Maybe a picture for the thumbnail of the
                                    universe, then underneath that, maybe a
                                    genre thing. Not sure if needed there. Can
                                    instead do created date
                                </p>
                            </Grid>
                            <Grid item md={9}>
                                <Formik
                                    initialValues={{
                                        name: "",
                                        description: "",
                                    }}
                                    validate={(values) => {
                                        const errors = {};

                                        // doing an if else so that only one shows up
                                        if (!values.name) {
                                            errors.name = "Required";
                                        } else if (!values.description) {
                                            errors.description = "Required";
                                        }

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
                                            <Grid
                                                container
                                                item
                                                md={12}
                                                spacing={2}
                                            >
                                                <Grid item md={12}>
                                                    <Field
                                                        component={TextField}
                                                        name="name"
                                                        id="name"
                                                        type="text"
                                                        label="What is your Universe's name?"
                                                        placeholder="e.g. Middle Earth, Narnia, Earthland, World2"
                                                        helperText="If you are not sure of a name now, this
                                                        can be changed later. Feel free to check
                                                        out the GENERATOR for ideas!"
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </Grid>

                                                <Grid item md={12}>
                                                    <Field
                                                        component={TextField}
                                                        name="description"
                                                        id="description"
                                                        type="text"
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                        multiline
                                                        rows={4}
                                                        variant="outlined"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        label="What is your Universe about? (Optional)"
                                                        placeholder="Write a short paragraph that evokes the wonderful or not so wonderful aspects of your world. A teaser of what is to come"
                                                    />
                                                </Grid>

                                                <Grid item md={12} align="end">
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        disabled={isSubmitting}
                                                        onClick={() =>
                                                            history.goBack()
                                                        }
                                                        className={
                                                            classes.button
                                                        }
                                                        disableElevation
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        disabled={isSubmitting}
                                                        onClick={submitForm}
                                                        disableElevation
                                                    >
                                                        Create
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    )}
                                </Formik>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </AppWrapper>
        </>
    );
};
