import { makeStyles } from "@material-ui/core";
import React from "react";

import TestImage from "../../../../images/landing-bg.jpg"

const useStyles = makeStyles((theme) => ({
    background: {
        
        height: "90vh",
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center"
    },
    filter: {
        "&:before": {
          background: "rgba(0, 0, 0, 0.5)"
        },
        "&:after,&:before": {
          position: "absolute",
          zIndex: "1",
          width: "100%",
          height: "100%",
          display: "block",
          left: "0",
          top: "0",
          content: "''"
        }
      },
}));

export default () => {
    const classes = useStyles();
    return (
        <>
            <div className={`${classes.background} ${classes.filter}`} style={{backgroundImage: "url(" + TestImage + ")"}}>

            </div>
        </>
    )
};
