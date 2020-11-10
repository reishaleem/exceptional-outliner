import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";

interface PropTypes {
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

const OverlayImage: React.FC<PropTypes> = ({
    image,
    fullPage,
    children,
}: PropTypes) => {
    const classes = useStyles(image)();

    return (
        <div
            className={clsx(classes.overlay, { [classes.fullPage]: fullPage })}
        >
            {children}
        </div>
    );
};

export default OverlayImage;
