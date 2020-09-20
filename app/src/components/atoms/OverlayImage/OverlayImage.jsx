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
        borderRadius: "0",
    },
});
export default (props) => {
    const classes = useStyles(props);

    return (
        <Card className={classes.card}>
            <CardMedia image={props.image} className={classes.media} />
            {props.children}
        </Card>
    );
};
