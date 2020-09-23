import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Formik, Form, Field } from "formik";
import { TextField, Checkbox as FormCheckBox } from "formik-material-ui";
import UniverseService from "../../../services/universe.service";

export default function DeleteUniverseModal(props) {
    const [open, setOpen] = React.useState(false);
    const formRef = useRef();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleExternalSubmit() {
        if (formRef.current) {
            formRef.current.handleSubmit();
        }
        handleClose();
    }

    function handleSubmit(values, setSubmitting) {
        console.log(props.ownerId);
        console.log(props.universeId);

        handleClose();
    }

    return (
        <>
            <Tooltip title="Delete" placement="top">
                <IconButton aria-label="delete" onClick={handleClickOpen}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Delete Universe
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This action cannot be undone. This will permanently
                        delete <strong>{props.universeName}</strong> and ALL
                        related items, such as wikis, manuscripts, files, etc.
                    </DialogContentText>
                    <DialogContentText>
                        Please type <strong>{props.universeName}</strong> to
                        confirm.
                    </DialogContentText>

                    <Formik
                        innerRef={formRef}
                        initialValues={{
                            name: "",
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (values.name !== props.universeName) {
                                errors.name =
                                    "You must type the universe name exactly";
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            props.handleSubmit(props.ownerId, props.universeId);
                        }}
                    >
                        {({ submitForm, isSubmitting, touched, errors }) => (
                            <Form>
                                <Field
                                    component={TextField}
                                    name="name"
                                    autoFocus
                                    id="name"
                                    type="text"
                                    margin="dense"
                                    placeholder="Type universe name"
                                    fullWidth
                                />
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        color="secondary"
                        onClick={() => {
                            handleExternalSubmit();
                        }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
