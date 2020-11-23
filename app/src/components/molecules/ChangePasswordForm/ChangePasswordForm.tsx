import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";

import { useUpdateUserPasswordMutation } from "../../../graphql/generated/graphql";

import AuthService from "../../../services/auth.service";
import Notification from "../../atoms/Notification/Notification";
import { Typography } from "@material-ui/core";

interface FormFields {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

const ChangePasswordForm: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [openSuccess, setOpenSuccess] = useState<boolean>(false);
    const [openError, setOpenError] = useState<boolean>(false);
    const currentUser = AuthService.getCurrentUser();
    const [updateUserPassword] = useUpdateUserPasswordMutation({
        onError: (error) => {
            setErrorMessage(error.message);
            setOpenError(true);
        },
    });

    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        },
        validate: (values: FormFields) => {
            const errors: Partial<FormFields> = {};
            if (!values.oldPassword) {
                errors.oldPassword = "Required";
            }

            if (!values.newPassword) {
                errors.newPassword = "Required";
            }
            if (values.newPassword.length < 6) {
                errors.newPassword = "Password must be at least 6 characters";
            }

            if (!values.confirmNewPassword) {
                errors.confirmNewPassword = "Require";
            }
            if (values.newPassword !== values.confirmNewPassword) {
                errors.confirmNewPassword = "Does not match";
            }

            return errors;
        },
        onSubmit: (values: FormFields, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
        },
    });

    async function handleSubmit(request: any, setSubmitting: any) {
        const response = await updateUserPassword({
            variables: {
                id: currentUser.id,
                oldPassword: request.oldPassword,
                newPassword: request.newPassword,
            },
        });
        console.log(response);
        if (response && response.data) {
            setOpenSuccess(true);
            setErrorMessage("");
        }
        formik.resetForm();
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
                        id="oldPassword"
                        name="oldPassword"
                        label="Current password"
                        type="password"
                        value={formik.values.oldPassword}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.oldPassword &&
                            Boolean(formik.errors.oldPassword)
                        }
                        helperText={
                            formik.touched.oldPassword &&
                            formik.errors.oldPassword
                        }
                        disabled={formik.isSubmitting}
                    />
                </Box>
                <Box m={1}>
                    <TextField
                        fullWidth
                        id="newPassword"
                        name="newPassword"
                        label="New password"
                        type="password"
                        value={formik.values.newPassword}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.newPassword &&
                            Boolean(formik.errors.newPassword)
                        }
                        helperText={
                            formik.touched.newPassword &&
                            formik.errors.newPassword
                        }
                        disabled={formik.isSubmitting}
                    />
                </Box>
                <Box m={1}>
                    <TextField
                        fullWidth
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        label="Re-enter new password"
                        type="password"
                        value={formik.values.confirmNewPassword}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.confirmNewPassword &&
                            Boolean(formik.errors.confirmNewPassword)
                        }
                        helperText={
                            formik.touched.confirmNewPassword &&
                            formik.errors.confirmNewPassword
                        }
                        disabled={formik.isSubmitting}
                    />
                </Box>
                <Box m={1} display="flex" justifyContent="flex-end">
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={formik.isSubmitting}
                    >
                        Change password
                    </Button>
                </Box>
            </form>
            <Notification
                message="Profile successfully updated"
                severity="success"
                open={openSuccess}
                setOpen={setOpenSuccess}
            />
            <Notification
                message="An error occurred. Please try again."
                severity="error"
                open={openError}
                setOpen={setOpenError}
            />
        </>
    );
};

export default ChangePasswordForm;
