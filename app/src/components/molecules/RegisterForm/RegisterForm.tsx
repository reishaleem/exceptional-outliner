import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";

import UserService from "../../../services/user.service";

interface FormFields {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validate: (values: FormFields) => {
            const errors: Partial<FormFields> = {};
            if (!values.name) {
                errors.name = "Required";
            } else if (values.name.length > 50) {
                errors.name = "Name must be shorter than 50 characters";
            }

            if (!values.email) {
                errors.email = "Required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = "Enter a valid email address";
            }

            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 6) {
                errors.password = "Password must be at least 6 characters";
            }

            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Password does not match";
            }

            return errors;
        },
        // setSubmitting is passed so we can end the Formik submission in our handleSubmit
        onSubmit: (values: FormFields, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
        },
    });

    async function handleSubmit(user: FormFields, setSubmitting: any) {
        const response = await UserService.createUser(
            user.name,
            user.email,
            user.password
        );
        if (response.success) {
            console.log(response.success);
        } else if (response.error) {
            console.log(response.error);
        }
        setSubmitting(false);
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box m={1}>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    disabled={formik.isSubmitting}
                />
            </Box>
            <Box m={1}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="text"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
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
            <Box m={1}>
                <TextField
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Re-enter password"
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.confirmPassword &&
                        Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
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
                    Register
                </Button>
            </Box>
        </form>
    );
};

export default RegisterForm;
