import React, { useState, useEffect } from "react";
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
import { TextField as MuiTextField } from "@material-ui/core";
import { Autocomplete } from "formik-material-ui-lab";

import { Formik, Form, Field } from "formik";
import { TextField, Checkbox as FormCheckBox } from "formik-material-ui";
import { Link, useHistory } from "react-router-dom";
import UniverseWrapper from "../../../../molecules/Wrapper/UniverseWrapper";
import UniverseService from "../../../../../services/universe.service";
import WikiService from "../../../../../services/wiki.service";

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

export default (props) => {
    const classes = useStyles();
    const history = useHistory();

    const currentUserId = "5f6b9d1ad980b3346a4a329d"; // needs to be changed when jwt is done

    const [universes, setUniverses] = useState([]);

    let defaultUniverse = {};
    if (props.location.state.universe) {
        defaultUniverse = props.location.state.universe;
    }

    const [universesLoaded, setUniversesLoaded] = useState(false);

    useEffect(() => {
        UniverseService.getUserUniverseList(currentUserId).then((response) => {
            setUniverses(response.data);
            setUniversesLoaded(true);
        });
    }, [currentUserId]);
    console.log(universes);

    const name = props.location.state.universe;
    console.log(name);

    function handleSubmit(values, setSubmitting) {
        WikiService.createWiki(
            currentUserId,
            values.universe._id,
            values.name,
            values.body
        ).then(
            (response) => {
                // setMessage(response.data.message);
                // setSuccessful(true);
                // logIn();
                //history.push("/about"); // for some reason...we aren't logged in at this point. It's like login isn't even being calleed...
                //window.location.reload();
                console.log(response);
                history.push({
                    pathname: `/app/universes/${response.data.universeId}/wikis/${response.data.wiki._id}/edit`,
                    state: { wikiId: response.data.wiki._id },
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

    const unis = [
        { title: "The Shawshank Redemption", year: 1994 },
        { title: "The Godfather", year: 1972 },
        { title: "The Godfather: Part II", year: 1974 },
        { title: "The Dark Knight", year: 2008 },
    ];

    return (
        <>
            <UniverseWrapper>
                <Grid container spacing={3}>
                    <Container>
                        <Grid container item md={12} spacing={3}>
                            <Grid item md={3}>
                                <p>
                                    Maybe a picture for the thumbnail of the
                                    wiki, then underneath that, maybe a
                                    category.
                                </p>
                            </Grid>
                            <Grid item md={9}>
                                <Formik
                                    initialValues={{
                                        name: "",
                                        // add for universes: the default universe. We will send it via state eventually (or it will just be {})
                                        universe: defaultUniverse,
                                        body: "",
                                    }}
                                    validate={(values) => {
                                        const errors = {};

                                        // doing an if else so that only one shows up
                                        if (!values.name) {
                                            errors.name = "Required";
                                        } else if (!values.body) {
                                            errors.body = "Required";
                                        } else if (!values.universe) {
                                            errors.universe = "Required";
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
                                                        label="Name"
                                                        placeholder="What is your wiki's name?"
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
                                                    {/* <Field
                                                        name="autocomplete"
                                                        multiple
                                                        component={Autocomplete}
                                                        options={unis}
                                                        getOptionLabel={(
                                                            option
                                                        ) => option.title}
                                                        style={{ width: 300 }}
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <MuiTextField
                                                                {...params}
                                                                error={
                                                                    touched[
                                                                        "autocomplete"
                                                                    ] &&
                                                                    !!errors[
                                                                        "autocomplete"
                                                                    ]
                                                                }
                                                                helperText={
                                                                    touched[
                                                                        "autocomplete"
                                                                    ] &&
                                                                    errors[
                                                                        "autocomplete"
                                                                    ]
                                                                }
                                                                label="Autocomplete"
                                                                variant="outlined"
                                                            />
                                                        )}
                                                    /> */}
                                                    <Field
                                                        component={Autocomplete}
                                                        name="universe"
                                                        options={universes}
                                                        getOptionLabel={(
                                                            option
                                                        ) => option.name}
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <MuiTextField
                                                                {...params}
                                                                error={
                                                                    touched[
                                                                        "universe"
                                                                    ] &&
                                                                    !!errors[
                                                                        "universe"
                                                                    ]
                                                                }
                                                                helperText={
                                                                    touched[
                                                                        "universe"
                                                                    ] &&
                                                                    errors[
                                                                        "universe"
                                                                    ]
                                                                }
                                                                label="Universe"
                                                                placeholder="Which universe is this wiki in?"
                                                                helperText="You cannot change this once it is created"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        )}
                                                    />
                                                </Grid>

                                                <Grid item md={12}>
                                                    <Field
                                                        component={TextField}
                                                        name="body"
                                                        id="body"
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
                                                        label="Body"
                                                        placeholder="We actually won't even have this body here. We're just gonna have stuff to choose categories and whatnot, then put the body in the actual edit page"
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
            </UniverseWrapper>
        </>
    );
};
