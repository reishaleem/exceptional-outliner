import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

interface Props {
    image: string;
    fullPage?: boolean;
    children?: any;
}

const useStyles = (image: string) =>
    makeStyles(() => ({
        overlay: {
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
        },
        fullPage: {
            height: "100vh",
        },
    }));

const OverlayImage: React.FC<Props> = ({
    image,
    fullPage,
    children,
}: Props) => {
    const classes = useStyles(image)();

    return (
        <Box height={fullPage ? "100vh" : "auto"} className={classes.overlay}>
            {children}
        </Box>
    );
};

export default OverlayImage;
