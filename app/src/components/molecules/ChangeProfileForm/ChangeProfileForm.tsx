import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";

import { useUpdateUserMutation } from "../../../graphql/generated/graphql";

import AuthService from "../../../services/auth.service";
import Notification from "../../atoms/Notification/Notification";

interface FormFields {
    name: string;
    email: string;
    penName: string;
    bio: string;
}

const ChangeProfileForm: React.FC = () => {
    const [openSuccess, setOpenSuccess] = useState<boolean>(false);
    const [openError, setOpenError] = useState<boolean>(false);
    const currentUser = AuthService.getCurrentUser();
    const [updateUser] = useUpdateUserMutation({
        onError: () => setOpenError(true),
    });

    const formik = useFormik({
        initialValues: {
            name: currentUser.name,
            email: currentUser.email,
            penName: currentUser.penName,
            bio: currentUser.bio,
        },
        validate: (values: FormFields) => {
            const errors: Partial<FormFields> = {};
            if (!values.name) {
                errors.name = "Required";
            }

            if (!values.penName) {
                errors.name = "Required";
            } else if (values.penName.length > 50) {
                errors.penName = "Pen Name must be shorter than 50 characters";
            }

            if (values.bio.length > 255) {
                errors.bio = "Bio must be shorter than 255 characters";
            }

            return errors;
        },
        onSubmit: (values: FormFields, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
        },
    });

    async function handleSubmit(user: FormFields, setSubmitting: any) {
        const response = await updateUser({
            variables: {
                id: currentUser.id,
                name: user.name,
                email: user.email,
                penName: user.penName,
                bio: user.bio,
            },
        });
        console.log(response);
        if (response && response.data) {
            setOpenSuccess(true);
        }

        setSubmitting(false);
    }

    return (
        <>
            {/* {errorMessage && (
                <Box m={1}>
                    <Typography variant="h6" component="h3" color="error">
                        {errorMessage}
                    </Typography>
                </Box>
            )} */}

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
                        error={
                            formik.touched.name && Boolean(formik.errors.name)
                        }
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
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                        disabled
                    />
                </Box>
                <Box m={1}>
                    <TextField
                        fullWidth
                        id="penName"
                        name="penName"
                        label="Pen Name"
                        type="text"
                        value={formik.values.penName}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.penName &&
                            Boolean(formik.errors.penName)
                        }
                        helperText={
                            formik.touched.penName && formik.errors.penName
                        }
                        disabled={formik.isSubmitting}
                    />
                </Box>
                <Box m={1}>
                    <TextField
                        fullWidth
                        id="bio"
                        name="bio"
                        label="Bio"
                        type="text"
                        multiline
                        rows={4}
                        value={formik.values.bio}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            maxLength: 255,
                        }}
                        placeholder="Tell us about yourself"
                        onChange={formik.handleChange}
                        error={formik.touched.bio && Boolean(formik.errors.bio)}
                        helperText={formik.touched.bio && formik.errors.bio}
                        disabled={formik.isSubmitting}
                    />
                    <Typography variant="body2" component="p">
                        {`${formik.values.bio.length} / 255`}
                    </Typography>
                </Box>
                <Box m={1} display="flex" justifyContent="flex-end">
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={formik.isSubmitting}
                    >
                        Update profile
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

export default ChangeProfileForm;
