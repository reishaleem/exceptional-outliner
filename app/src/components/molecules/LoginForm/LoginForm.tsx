import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";

interface FormFields {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
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
        onSubmit: (values: FormFields) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box m={1}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
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
    );
};

export default LoginForm;
