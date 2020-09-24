import React, { useRef } from "react";
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
import { Link, useHistory } from "react-router-dom";
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
    button: {
        margin: theme.spacing(1),
    },
}));

export default () => {
    const classes = useStyles();
    const history = useHistory();

    const formRef = useRef();

    function handleExternalSubmit() {
        if (formRef.current) {
            formRef.current.handleSubmit();
        }
    }

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

    return (
        <>
            <UniverseWrapper>
                <Grid container spacing={3}>
                    <Container>
                        <Grid container item md={12} spacing={3}>
                            <Grid container item md={8}>
                                <Grid item md={12}>
                                    <Typography
                                        gutterBottom
                                        variant="h4"
                                        component="h2"
                                    >
                                        wiki.name
                                    </Typography>
                                </Grid>
                                <Grid item md={12}>
                                    <Divider style={{ marginBottom: "10px" }} />
                                </Grid>
                                <Formik
                                    innerRef={formRef}
                                    initialValues={{
                                        name: "",
                                        body: "",
                                    }}
                                    validate={(values) => {
                                        const errors = {};

                                        // doing an if else so that only one shows up
                                        if (!values.name) {
                                            errors.name = "Required";
                                        } else if (!values.body) {
                                            errors.body = "Required";
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
                                                        placeholder="Right now it's just this body...so edit here! Make this rich"
                                                    />
                                                </Grid>

                                                <Grid
                                                    item
                                                    md={12}
                                                    align="end"
                                                ></Grid>
                                            </Grid>
                                        </Form>
                                    )}
                                </Formik>
                            </Grid>
                            <Grid container item md={4}>
                                <Grid item md={12}>
                                    <Card>
                                        <CardContent align="center">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => history.goBack()}
                                                className={classes.button}
                                                disableElevation
                                            >
                                                Back to universe
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                // disabled={isSubmitting}
                                                onClick={handleExternalSubmit}
                                                disableElevation
                                            >
                                                Save
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={12}>
                                    <Card>
                                        <CardContent align="center">
                                            Todo list
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </UniverseWrapper>
        </>
    );
};
