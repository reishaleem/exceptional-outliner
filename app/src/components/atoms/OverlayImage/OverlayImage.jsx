import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
    media: {
        height: 0,
        width: "100%",
        paddingTop: "56.25%", // 16:9
    },
    card: {
        position: "relative",
    },
    overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "black",
        backgroundColor: "white",
    },
});
export default (props) => {
    const classes = useStyles(props);

    return (
        <Card className={classes.card}>
            <CardMedia
                image={props.image}
                height="140"
                className={classes.media}
            />
            <div className={classes.overlay}>
                this text should overlay the image
            </div>
        </Card>
    );
};
