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
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
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
import {
    Autocomplete,
    AutocompleteRenderInputParams,
} from "formik-material-ui-lab";

interface Values {
    name: string;
    description: string;
    genre: string;
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
        height: "60%", // need to somehow get the height to match the width
        width: "100%",
    },
}));

export default () => {
    const classes = useStyles();
    const history = useHistory();

    const top100Films = [
        { title: "The Shawshank Redemption", year: 1994 },
        { title: "The Godfather", year: 1972 },
        { title: "The Godfather: Part II", year: 1974 },
        { title: "The Dark Knight", year: 2008 },
    ];

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
                        genre: [],
                    }}
                    validate={(values) => {
                        const errors: Partial<Values> = {};

                        if (!values.name) {
                            errors.name = "Required";
                        }

                        if (values.genre.length == 0) {
                            errors.genre = "Required";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values, setSubmitting);
                    }}
                >
                    {({ submitForm, isSubmitting, touched, errors }) => (
                        <Form style={{ width: "100%" }}>
                            <Grid container>
                                <Grid container item md={3} justify="center">
                                    <Grid item md={8}>
                                        <Avatar
                                            className={
                                                classes.universeThumbnail
                                            }
                                            variant="square"
                                        >
                                            N
                                        </Avatar>
                                        <Button
                                            variant="contained"
                                            color="default"
                                            className={classes.button}
                                            startIcon={<CloudUploadIcon />}
                                            fullWidth
                                            style={{ marginTop: "8px" }}
                                            disableElevation
                                            size="small"
                                        >
                                            Upload image
                                        </Button>
                                    </Grid>
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
                                            name="genre"
                                            multiple
                                            component={Autocomplete}
                                            options={genres}
                                            getOptionLabel={(option: string) =>
                                                option
                                            }
                                            style={{ width: "100%" }}
                                            renderInput={(
                                                params: AutocompleteRenderInputParams
                                            ) => (
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
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    //variant="outlined"
                                                />
                                            )}
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
