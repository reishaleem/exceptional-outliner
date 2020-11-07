import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import Navbar from "../../../molecules/Navbar/Public/Navbar";
import OverlayImage from "../../../atoms/OverlayImage/OverlayImage";

import OnePiece from "../../../../images/onepieceworld.jpg";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(() => ({
    positionInTheDistance: {
        position: "absolute",
        top: "30%",
        right: "30%",
    },
    alignBottom: {
        position: "absolute",
        bottom: 0,
    },
}));

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <OverlayImage image={OnePiece} fullPage>
                <Navbar transparent />
                <div className={classes.positionInTheDistance}>
                    <Typography variant="h3" component="h1">
                        Here is some text
                    </Typography>
                    <Typography variant="h4" component="h2">
                        And some more
                    </Typography>
                    <Typography variant="h4" component="h2">
                        and more
                    </Typography>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                    >
                        Start your journey
                    </Button>
                </div>
                <Box position="absolute" mr="50%" ml="50%" bottom={0} mb={1}>
                    <IconButton aria-label="scroll-arrow" color="primary">
                        <ArrowDownwardIcon fontSize="large" />
                    </IconButton>
                </Box>
            </OverlayImage>
            hello
        </>
    );
};

export default Home;
