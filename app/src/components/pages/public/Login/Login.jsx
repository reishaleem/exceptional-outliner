import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../../atoms/PublicNavbar/Navbar";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    InputLabel,
    Button,
    FormControlLabel,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField, Checkbox as FormCheckBox } from "formik-material-ui";
import AuthService from "../../../../services/auth.service";
import { useHistory, Redirect } from "react-router-dom";

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
        left: "20px",
        color: "white",
        width: "100%",
        paddingTop: "3em",
    },
    cardHeader: {
        padding: ".75rem 1.25rem",
        marginBottom: "0",
        backgroundColor: "rgba(0,0,0,.03)",
        borderBottom: "1px solid rgba(0,0,0,.125)",
        fontSize: "1rem",
    },
    formLabel: {
        padding: "10px 12px",
    },
}));

export default () => {
    const classes = useStyles();
    const history = useHistory();

    const currentUser = AuthService.getCurrentUser();
    if (currentUser !== null) {
        return <Redirect to="/app" />;
    }

    function handleSubmit(values, setSubmitting) {
        AuthService.login(values.username, values.password).then(
            () => {
                // setMessage(response.data.message);
                // setSuccessful(true);
                // logIn();
                //history.push("/about"); // for some reason...we aren't logged in at this point. It's like login isn't even being calleed...
                //window.location.reload();
                //console.log(response);
                history.push("/app");
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
            <Navbar />
            <Grid container spacing={3}>
                <Container>
                    <Grid
                        container
                        item
                        md={12}
                        spacing={3}
                        className={classes.aboutDesc}
                    >
                        <Grid container item md={7}>
                            <Grid item md={12}>
                                <Typography
                                    variant="h5"
                                    align="center"
                                    gutterBottom
                                >
                                    Login
                                </Typography>
                                <Card
                                    variant="outlined"
                                    style={{ width: "100%" }}
                                >
                                    <CardContent>
                                        <Formik
                                            initialValues={{
                                                username: "",
                                                password: "",
                                                rememberMe: false,
                                            }}
                                            validate={(values) => {
                                                const errors = {};

                                                // doing an if else so that only one shows up
                                                if (!values.username) {
                                                    errors.username =
                                                        "Required";
                                                } else if (!values.password) {
                                                    errors.password =
                                                        "Required";
                                                }

                                                return errors;
                                            }}
                                            onSubmit={(
                                                values,
                                                { setSubmitting }
                                            ) => {
                                                handleSubmit(
                                                    values,
                                                    setSubmitting
                                                );
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
                                                        <Grid item md={4}>
                                                            <InputLabel htmlFor="username">
                                                                <Typography
                                                                    variant="body1"
                                                                    align="right"
                                                                    className={
                                                                        classes.formLabel
                                                                    }
                                                                >
                                                                    Username
                                                                </Typography>
                                                            </InputLabel>
                                                        </Grid>
                                                        <Grid item md={8}>
                                                            <Field
                                                                component={
                                                                    TextField
                                                                }
                                                                name="username"
                                                                id="username"
                                                                type="text"
                                                                style={{
                                                                    width:
                                                                        "100%",
                                                                }}
                                                            />
                                                        </Grid>

                                                        <Grid item md={4}>
                                                            <InputLabel htmlFor="password">
                                                                <Typography
                                                                    variant="body1"
                                                                    align="right"
                                                                    className={
                                                                        classes.formLabel
                                                                    }
                                                                >
                                                                    Password
                                                                </Typography>
                                                            </InputLabel>
                                                        </Grid>
                                                        <Grid item md={8}>
                                                            <Field
                                                                component={
                                                                    TextField
                                                                }
                                                                name="password"
                                                                id="password"
                                                                type="password"
                                                                style={{
                                                                    width:
                                                                        "100%",
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            md={4}
                                                        ></Grid>
                                                        <Grid
                                                            item
                                                            md={8}
                                                            align="start"
                                                        >
                                                            <FormControlLabel
                                                                control={
                                                                    <Field
                                                                        component={
                                                                            FormCheckBox
                                                                        }
                                                                        id="rememberMe"
                                                                        name="rememberMe"
                                                                        type="checkbox"
                                                                    />
                                                                }
                                                                label="Remember me"
                                                            />
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            md={4}
                                                        ></Grid>
                                                        <Grid
                                                            item
                                                            md={8}
                                                            align="start"
                                                        >
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                disabled={
                                                                    isSubmitting
                                                                }
                                                                onClick={
                                                                    submitForm
                                                                }
                                                            >
                                                                Login
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </Form>
                                            )}
                                        </Formik>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container item md={5}>
                            <Grid item md={12}>
                                <Typography
                                    variant="h5"
                                    align="center"
                                    gutterBottom
                                >
                                    Login with Social
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
};
