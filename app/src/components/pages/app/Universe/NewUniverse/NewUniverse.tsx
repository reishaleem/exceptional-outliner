import React from "react";
import AppWrapper from "../../../../organisms/Wrappers/AppWrapper";
import Grid from "@material-ui/core/Grid";
import {
    Container,
    makeStyles,
    Button,
    Avatar,
    Typography,
    FormGroup,
    FormControlLabel,
} from "@material-ui/core";
import MuiTextField from "@material-ui/core/TextField";
import { Formik, Form, Field } from "formik";
import {
    Checkbox,
    CheckboxProps,
    fieldToCheckbox,
    TextField,
} from "formik-material-ui";
import { useHistory, Redirect } from "react-router-dom";
import UniverseService from "../../../../../services/universe.service";
import AuthService from "../../../../../services/auth.service";
import GenreCheckbox from "../../../../atoms/GenreCheckbox/GenreCheckbox";
import { Autocomplete } from "formik-material-ui-lab";

interface Values {
    name: string;
    description: string;
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
    button: {
        marginRight: theme.spacing(1),
    },
    universeThumbnail: {
        //height: "75%",
        //width: "75%",
        alignItems: "center",
    },
}));

export default () => {
    const classes = useStyles();
    const history = useHistory();

    const currentUser = AuthService.getCurrentUser(); // needs to be changed when jwt is done
    if (currentUser === null) {
        return <Redirect to="/login" />;
    }

    function handleSubmit(values: any, setSubmitting: any) {
        setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
        }, 500);
    }

    const genres = ["Fantasy", "Nonfiction"];

    return (
        <AppWrapper>
            <Grid container spacing={2}>
                <Formik
                    initialValues={{
                        name: "",
                        description: "",
                        genre: {},
                    }}
                    validate={(values) => {
                        const errors: Partial<Values> = {};
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values, setSubmitting);
                    }}
                >
                    {({ submitForm, isSubmitting, touched, errors }) => (
                        <Form style={{ width: "100%" }}>
                            <Grid container spacing={2}>
                                <Grid container item md={3}>
                                    <Field
                                        style={{ width: "100%" }}
                                        component={Autocomplete}
                                        name="genre"
                                        options={genres}
                                        getOptionLabel={(option: any) => option}
                                        renderInput={(params: any) => (
                                            <MuiTextField
                                                {...params}
                                                error={
                                                    touched["genre"] &&
                                                    !!errors["genre"]
                                                }
                                                helperText={
                                                    touched["genre"] &&
                                                    errors["genre"]
                                                }
                                                label="Genre"
                                                //placeholder="What is the genre of this Universe?"
                                                // InputLabelProps={{
                                                //     shrink: true,
                                                // }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid container item md={9} spacing={2}>
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

                                    <Grid
                                        item
                                        md={12}
                                        container
                                        justify="flex-end"
                                    >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={isSubmitting}
                                            onClick={() => history.goBack()}
                                            className={classes.button}
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
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </AppWrapper>
    );
};
