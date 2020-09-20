import React from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import Navbar from "../../../atoms/PublicNavbar/Navbar";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    CardMedia,
    Box,
    InputLabel,
    Button,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import {
    TextField,
    InputBase,
    fieldToTextField,
    fieldToInputBase,
} from "formik-material-ui";
import UserService from "../../../../services/user.service";

import img from "../../../../images/notebook-pen-desk.jpg";
import OnePiece from "../../../../images/onepieceworld.jpg";
import OverlayImage from "../../../atoms/OverlayImage/OverlayImage";

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

const BootstrapInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.common.white,
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

function handleSubmit(values, setSubmitting) {
    // setTimeout(() => {
    //     setSubmitting(false);
    //     alert(JSON.stringify(values, null, 2));
    // }, 500);
    UserService.addUser(
        values.name,
        values.username,
        values.email,
        values.password
    ).then(
        (response) => {
            // setMessage(response.data.message);
            // setSuccessful(true);
            // logIn();
            //history.push("/about"); // for some reason...we aren't logged in at this point. It's like login isn't even being calleed...
            //window.location.reload();
            console.log(response);
        },
        (error) => {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            console.log(error);
        }
    );
}

export default () => {
    const classes = useStyles();
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
                            <Grid container item md={12}>
                                <Card
                                    variant="outlined"
                                    style={{ width: "100%" }}
                                >
                                    <div className={classes.cardHeader}>
                                        Create your account
                                    </div>
                                    <CardContent>
                                        <Formik
                                            initialValues={{
                                                name: "",
                                                username: "",
                                                email: "",
                                                password: "",
                                                confirmPassword: "",
                                            }}
                                            validate={(values) => {
                                                const errors = {};
                                                if (!values.name) {
                                                    errors.name = "Required";
                                                } else if (
                                                    values.name.length > 30
                                                ) {
                                                    errors.name =
                                                        "Name must be shorter than 30 characters";
                                                }

                                                if (!values.username) {
                                                    errors.username =
                                                        "Required";
                                                } else if (
                                                    values.username.length > 20
                                                ) {
                                                    errors.username =
                                                        "Username must be shorter than 20 characters";
                                                }

                                                if (!values.email) {
                                                    errors.email = "Required";
                                                } else if (
                                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                                                        values.email
                                                    )
                                                ) {
                                                    errors.email =
                                                        "Enter a valid email address";
                                                }

                                                if (!values.password) {
                                                    errors.password =
                                                        "Required";
                                                } else if (
                                                    values.password.length < 6
                                                ) {
                                                    errors.password =
                                                        "Password must be at least 6 characters";
                                                }

                                                if (
                                                    values.password !=
                                                    values.confirmPassword
                                                ) {
                                                    errors.confirmPassword =
                                                        "Password does not match";
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
                                                            <InputLabel htmlFor="name">
                                                                <Typography
                                                                    variant="body1"
                                                                    align="right"
                                                                    className={
                                                                        classes.formLabel
                                                                    }
                                                                >
                                                                    Name
                                                                </Typography>
                                                            </InputLabel>
                                                        </Grid>
                                                        <Grid item md={8}>
                                                            <Field
                                                                component={
                                                                    TextField
                                                                }
                                                                name="name"
                                                                id="name"
                                                                type="text"
                                                                style={{
                                                                    width:
                                                                        "100%",
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item md={4}>
                                                            <InputLabel htmlFor="username">
                                                                <Typography
                                                                    variant="body1"
                                                                    align="right"
                                                                    dense
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
                                                            <InputLabel htmlFor="email">
                                                                <Typography
                                                                    variant="body1"
                                                                    align="right"
                                                                    dense
                                                                    className={
                                                                        classes.formLabel
                                                                    }
                                                                >
                                                                    Email
                                                                    address
                                                                </Typography>
                                                            </InputLabel>
                                                        </Grid>
                                                        <Grid item md={8}>
                                                            <Field
                                                                component={
                                                                    TextField
                                                                }
                                                                name="email"
                                                                id="email"
                                                                type="email"
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
                                                                    dense
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
                                                        <Grid item md={4}>
                                                            <InputLabel htmlFor="confirmPassword">
                                                                <Typography
                                                                    variant="body1"
                                                                    align="right"
                                                                    dense
                                                                    className={
                                                                        classes.formLabel
                                                                    }
                                                                >
                                                                    Re-enter
                                                                    Password
                                                                </Typography>
                                                            </InputLabel>
                                                        </Grid>
                                                        <Grid item md={8}>
                                                            <Field
                                                                component={
                                                                    TextField
                                                                }
                                                                name="confirmPassword"
                                                                id="confirmPassword"
                                                                type="password"
                                                                style={{
                                                                    width:
                                                                        "100%",
                                                                }}
                                                            />
                                                        </Grid>

                                                        <Grid
                                                            item
                                                            md={12}
                                                            align="end"
                                                            direction="row"
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
                                                                Submit
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
                                <Typography variant="h4" align="center">
                                    Sign up with Social
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
};
