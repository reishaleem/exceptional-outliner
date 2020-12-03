import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import MainWrapper from "../../../organisms/Wrapper/Main/MainWrapper";
import Notification from "../../../atoms/Notification/Notification";

import { useCreateWorldMutation } from "../../../../graphql/generated/graphql";

import AuthService from "../../../../services/auth.service";

import { genres } from "../../../../constants/WorldConstants";

interface FormFields {
    name: string;
    genres: string[];
    description: string;
    //thumbnail: string;
}

interface FormFieldErrors {
    name: string;
    genres: string;
    description: string;
    //thumbnail: string;
}

const CreateWorld: React.FC = () => {
    const currentUser = AuthService.getCurrentUser();
    const [errorMessage, setErrorMessage] = useState("");
    const [openError, setOpenError] = useState<boolean>(false);
    const [createWorld] = useCreateWorldMutation({
        onError: (error) => {
            setErrorMessage(error.message);
            setOpenError(true);
        },
    });

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            name: "",
            genres: [],
            description: "",
        },
        validate: (values: FormFields) => {
            const errors: Partial<FormFieldErrors> = {};

            if (!values.name) {
                errors.name = "Required";
            }

            if (values.genres.length === 0) {
                errors.genres = "Required";
            }

            return errors;
        },
        onSubmit: (values: FormFields, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
        },
    });

    async function handleSubmit(request: FormFields, setSubmitting: any) {
        const response = await createWorld({
            variables: {
                ownerId: currentUser.id,
                name: request.name,
                genres: request.genres,
                description: request.description,
            },
        });
        console.log(response);
        if (response && response.data) {
            setErrorMessage("");
            history.push(`/world/${response.data.createWorld!.id}`);
        }
        formik.resetForm();
        setSubmitting(false);
    }

    return (
        <>
            <MainWrapper>
                <Grid item xs={12} sm={12} md={1}></Grid>
                <Grid item xs={12} sm={12} md={10}>
                    <Box display="flex">
                        <Typography
                            variant="h3"
                            component="h2"
                            display="inline"
                        >
                            Create World
                        </Typography>
                    </Box>
                    <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={1}></Grid>
                <Grid item xs={12} sm={12} md={1}></Grid>
                <Grid container item xs={12} sm={12} md={10}>
                    <Grid item xs={12} sm={12} md={4}>
                        put the form on the left and the profile picture on the
                        right. Maybe put the genre filter underneath the
                        picture.
                    </Grid>

                    <Grid item xs={12} sm={12} md={8}>
                        <form onSubmit={formik.handleSubmit}>
                            <Box m={1}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.name &&
                                        Boolean(formik.errors.name)
                                    }
                                    helperText={
                                        formik.touched.name &&
                                        formik.errors.name
                                    }
                                    disabled={formik.isSubmitting}
                                />
                            </Box>
                            <Box m={1}>
                                <TextField
                                    id="genre-filter"
                                    name="genres"
                                    label="Genre(s)"
                                    error={
                                        formik.touched.name &&
                                        Boolean(formik.errors.name)
                                    }
                                    helperText={
                                        formik.touched.name &&
                                        formik.errors.name
                                    }
                                    disabled={formik.isSubmitting}
                                    fullWidth
                                    select
                                    SelectProps={{
                                        multiple: true,
                                        MenuProps: {
                                            anchorOrigin: {
                                                vertical: "bottom",
                                                horizontal: "center",
                                            },
                                            transformOrigin: {
                                                vertical: "top",
                                                horizontal: "center",
                                            },
                                            getContentAnchorEl: null,
                                            PaperProps: {
                                                style: {
                                                    maxHeight: 48 * 4.5 + 9,
                                                },
                                            },
                                        },
                                        renderValue: (selected) => {
                                            if (
                                                (selected as string[]).length >
                                                1
                                            ) {
                                                return `${
                                                    (selected as string[])[0]
                                                } +${
                                                    (selected as string[])
                                                        .length - 1
                                                }`;
                                            }

                                            return (selected as string[]).join(
                                                ", "
                                            );
                                        },
                                    }}
                                    value={formik.values.genres}
                                    onChange={formik.handleChange}
                                >
                                    {genres.map((genre) => {
                                        return (
                                            <MenuItem value={genre} key={genre}>
                                                <Checkbox
                                                    checked={
                                                        formik.values.genres.indexOf(
                                                            genre
                                                        ) > -1
                                                    }
                                                />
                                                <ListItemText primary={genre} />
                                            </MenuItem>
                                        );
                                    })}
                                </TextField>
                            </Box>
                            <Box m={1}>
                                <TextField
                                    fullWidth
                                    id="description"
                                    name="description"
                                    label="Description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    error={
                                        formik.touched.description &&
                                        Boolean(formik.errors.description)
                                    }
                                    helperText={
                                        formik.touched.description &&
                                        formik.errors.description
                                    }
                                    disabled={formik.isSubmitting}
                                    multiline
                                    rows={4}
                                />
                            </Box>
                            <Box m={1} display="flex" justifyContent="flex-end">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                    disabled={formik.isSubmitting}
                                >
                                    Create
                                </Button>
                            </Box>
                        </form>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={1}></Grid>

                <Notification
                    message={errorMessage}
                    severity="error"
                    open={openError}
                    setOpen={setOpenError}
                />
            </MainWrapper>
        </>
    );
};

export default CreateWorld;
