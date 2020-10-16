import React from "react";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: "0.9375rem 0",
        textAlign: "center",
        display: "flex",
        zIndex: 2,
        position: "relative",
    },
    left: {
        float: "left",
        display: "block",
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right",
    },
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0",
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto",
    },
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: 500,
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block",
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://github.com/reishaleem/exceptional-outliner"
                                className={classes.block}
                            >
                                GitHub
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://twitter.com"
                                className={classes.block}
                            >
                                Twitter
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://instagram.com"
                                className={classes.block}
                            >
                                Contact Us
                            </a>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    &copy; 2020. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};
