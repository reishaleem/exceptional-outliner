import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
        objectFit: "cover",
        filter: "brightness(50%)",
    },
    card: {
        width: "100%",
        maxHeight: "45vh",
        position: "relative",
    },
    overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "white",
        width: "100%",
        paddingTop: "3em",
    },
});
export default (props) => {
    const classes = useStyles(props);

    return (
        <Card className={classes.card}>
            <CardMedia image={props.image} className={classes.media} />
            <div className={classes.overlay}>{props.children}</div>
        </Card>
    );
};
