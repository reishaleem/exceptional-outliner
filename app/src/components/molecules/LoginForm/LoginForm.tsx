import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import AuthService from "../../../services/auth.service";

import { useLoginMutation } from "../../../graphql/generated/graphql";

interface FormFields {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const history = useHistory();

    const [login] = useLoginMutation({
        onError: (error) => {
            setErrorMessage(error.message);
        },
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: (values: FormFields) => {
            const errors: Partial<FormFields> = {};
            if (!values.email) {
                errors.email = "";
            }

            if (!values.password) {
                errors.password = "";
            }

            return errors;
        },
        onSubmit: (values: FormFields, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
        },
    });

    async function handleSubmit(user: FormFields, setSubmitting: any) {
        const response = await login({
            variables: {
                email: user.email,
                password: user.password,
            },
        });
        if (response && response.data) {
            AuthService.setAccessToken(response.data.login!.accessToken!);
            history.push("/dashboard");
        }

        setSubmitting(false);
    }

    return (
        <>
            {errorMessage && (
                <Box m={1}>
                    <Typography variant="h6" component="h3" color="error">
                        {errorMessage}
                    </Typography>
                </Box>
            )}

            <form onSubmit={formik.handleSubmit}>
                <Box m={1}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                        disabled={formik.isSubmitting}
                    />
                </Box>
                <Box m={1}>
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                        disabled={formik.isSubmitting}
                    />
                </Box>
                <Box m={1} display="flex" justifyContent="flex-end">
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        fullWidth
                        disabled={formik.isSubmitting}
                    >
                        Login
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default LoginForm;
