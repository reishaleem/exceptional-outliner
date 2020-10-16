import {
    Button,
    Container,
    Grid,
    LinearProgress,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";

import TestImage from "../../../../images/landing-bg.jpg";
import PublicFooter from "../../../molecules/Footer/PublicFooter";
import PublicNavbar from "../../../molecules/Navbar/PublicNavbar/PublicNavbar";

interface Values {
    name: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const useStyles = makeStyles((theme) => ({
    background: {
        height: "40vh",
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
    },
    filter: {
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)",
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''",
        },
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: 3,
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        //width: "500px",
    },
    section: {
        padding: "70px 0",
        //textAlign: "center"
    },
    productTitle: {
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
    },
}));

export default () => {
    const classes = useStyles();

    function handleSubmit(values: any, setSubmitting: any) {
        setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
        }, 500);
    }
    return (
        <>
            <PublicNavbar />
            <div
                className={`${classes.background}`}
                style={{ backgroundImage: "url(" + TestImage + ")" }}
            ></div>
            <div className={`${classes.mainRaised} ${classes.main}`}>
                <Container>
                    <div className={`${classes.section}`}>
                        <Grid container justify="center">
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography
                                    variant="h3"
                                    component="h3"
                                    align="center"
                                    className={`${classes.productTitle}`}
                                >
                                    Create your account
                                </Typography>
                            </Grid>
                        </Grid>
                        <div>
                            <Grid
                                container
                                xs={12}
                                sm={12}
                                md={12}
                                justify="center"
                            >
                                <Grid item xs={12} sm={12} md={4}>
                                    <Formik
                                        initialValues={{
                                            name: "",
                                            username: "",
                                            email: "",
                                            password: "",
                                            confirmPassword: "",
                                        }}
                                        validate={(values) => {
                                            const errors: Partial<Values> = {};
                                            if (!values.name) {
                                                errors.name = "Required";
                                            } else if (
                                                values.name.length > 30
                                            ) {
                                                errors.name =
                                                    "Name must be shorter than 30 characters";
                                            }

                                            if (!values.username) {
                                                errors.username = "Required";
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
                                                errors.password = "Required";
                                            } else if (
                                                values.password.length < 6
                                            ) {
                                                errors.password =
                                                    "Password must be at least 6 characters";
                                            }

                                            if (
                                                values.password !==
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
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    label="Name"
                                                    fullWidth
                                                    style={{
                                                        marginBottom: "10px",
                                                    }}
                                                />
                                                <Field
                                                    component={TextField}
                                                    name="username"
                                                    id="username"
                                                    type="text"
                                                    label="Username"
                                                    fullWidth
                                                    style={{
                                                        marginBottom: "10px",
                                                    }}
                                                />
                                                <Field
                                                    component={TextField}
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    label="Email"
                                                    fullWidth
                                                    style={{
                                                        marginBottom: "10px",
                                                    }}
                                                />
                                                <Field
                                                    component={TextField}
                                                    name="password"
                                                    id="password"
                                                    type="password"
                                                    label="Password"
                                                    fullWidth
                                                    style={{
                                                        marginBottom: "10px",
                                                    }}
                                                />
                                                <Field
                                                    component={TextField}
                                                    name="confirmPassword"
                                                    id="confirmPassword"
                                                    type="password"
                                                    label="Re-enter password"
                                                    fullWidth
                                                    style={{
                                                        marginBottom: "20px",
                                                    }}
                                                />
                                                {isSubmitting && (
                                                    <LinearProgress />
                                                )}
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    onClick={submitForm}
                                                    fullWidth
                                                >
                                                    Register
                                                </Button>
                                            </Form>
                                        )}
                                    </Formik>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Container>
            </div>
            <PublicFooter />
        </>
    );
};
