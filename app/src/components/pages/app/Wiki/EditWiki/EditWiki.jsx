import React, { useRef, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import {
    Container,
    Card,
    CardContent,
    Typography,
    makeStyles,
    Divider,
    Button,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Link, useParams, Redirect } from "react-router-dom";
import UniverseWrapper from "../../../../molecules/Wrapper/UniverseWrapper";
import WikiService from "../../../../../services/wiki.service";
import AuthService from "../../../../../services/auth.service";

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
        color: "white",
        width: "100%",
        paddingTop: "3em",
    },
    underlinedHeader: {
        display: "inline-block",
        borderBottom: "2px solid #fff",
        paddingBottom: "1rem",
    },
    cardHeader: {
        padding: ".75rem 1.25rem",
        marginBottom: "0",
        backgroundColor: "rgba(0,0,0,.03)",
        borderBottom: "1px solid rgba(0,0,0,.125)",
        fontSize: "1rem",
    },
    button: {
        margin: theme.spacing(1),
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
}));

export default () => {
    const classes = useStyles();

    const currentUser = AuthService.getCurrentUser();
    if (currentUser === null) {
        return <Redirect to="/login" />;
    }

    const formRef = useRef();
    const { universeId, wikiId } = useParams();

    const [wiki, setWiki] = useState({});
    const [wikiLoaded, setWikiLoaded] = useState(false);

    useEffect(() => {
        WikiService.getWikiById(currentUser.id, universeId, wikiId).then(
            (response) => {
                setWiki(response.data);
                setWikiLoaded(true);
            }
        );
        //setWikiLoaded(true);
    }, [currentUser.id, universeId, wikiId]);

    function handleExternalSubmit() {
        if (formRef.current) {
            formRef.current.handleSubmit();
        }
    }

    function handleSubmit(values, setSubmitting) {
        setWikiLoaded(false);

        WikiService.updateWiki(
            currentUser.id,
            universeId,
            wikiId,
            values.name,
            values.body
        ).then(
            (response) => {
                // setMessage(response.data.message);
                // setSuccessful(true);
                // logIn();
                //history.push("/about"); // for some reason...we aren't logged in at this point. It's like login isn't even being calleed...
                WikiService.getWikiById(
                    currentUser.id,
                    universeId,
                    wikiId
                ).then((response) => {
                    setWiki(response.data);
                    setWikiLoaded(true);
                });
            },
            (error) => {
                // const resMessage =
                //     (error.response &&
                //         error.response.data &&
                //         error.response.data.message) ||
                //     error.message ||
                //     error.toString();
            }
        );
    }

    return (
        <>
            <UniverseWrapper>
                <Grid container spacing={3}>
                    <Container>
                        <Grid container item md={12} spacing={3}>
                            <Grid item md={8}>
                                <Typography variant="h4" component="h2">
                                    Edit wiki
                                </Typography>
                                <Divider style={{}} />
                            </Grid>
                            <Grid item md={4}></Grid>

                            <Grid container item md={8}>
                                {wikiLoaded && (
                                    <Formik
                                        innerRef={formRef}
                                        initialValues={{
                                            name: wiki.name,
                                            body: wiki.body,
                                        }}
                                        validate={(values) => {
                                            const errors = {};

                                            // doing an if else so that only one shows up
                                            if (!values.name) {
                                                errors.name = "Required";
                                            } else if (!values.body) {
                                                errors.body = "Required";
                                            }

                                            return errors;
                                        }}
                                        onSubmit={(
                                            values,
                                            { setSubmitting }
                                        ) => {
                                            handleSubmit(values, setSubmitting);
                                        }}
                                        enableReinitialize
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
                                                    <Grid item md={12}>
                                                        <Field
                                                            component={
                                                                TextField
                                                            }
                                                            name="name"
                                                            id="name"
                                                            type="text"
                                                            label="Name"
                                                            placeholder="What is your wiki's name?"
                                                            helperText="If you are not sure of a name now, this
                                                        can be changed later. Feel free to check
                                                        out the GENERATOR for ideas!"
                                                            style={{
                                                                width: "100%",
                                                            }}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </Grid>

                                                    <Grid item md={12}>
                                                        <Field
                                                            component={
                                                                TextField
                                                            }
                                                            name="body"
                                                            id="body"
                                                            type="text"
                                                            style={{
                                                                width: "100%",
                                                            }}
                                                            multiline
                                                            rows={4}
                                                            variant="outlined"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            label="Body"
                                                            placeholder="Right now it's just this body...so edit here! Make this rich"
                                                        />
                                                    </Grid>

                                                    <Grid
                                                        item
                                                        md={12}
                                                        align="end"
                                                    ></Grid>
                                                </Grid>
                                            </Form>
                                        )}
                                    </Formik>
                                )}
                            </Grid>
                            <Grid container item md={4}>
                                <Grid item md={12}>
                                    <Card>
                                        <CardContent align="center">
                                            <Link
                                                to={{
                                                    pathname: `/app/universes/${universeId}`,
                                                    state: {
                                                        universeId: universeId,
                                                    },
                                                }}
                                                className={classes.link}
                                            >
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.button}
                                                    disableElevation
                                                    disabled={!wikiLoaded}
                                                >
                                                    Back to universe
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                // disabled={isSubmitting}
                                                onClick={handleExternalSubmit}
                                                disableElevation
                                                disabled={!wikiLoaded}
                                            >
                                                Save
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={12}>
                                    <Card>
                                        <CardContent align="center">
                                            Todo list
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </UniverseWrapper>
        </>
    );
};
