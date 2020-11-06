import { Typography } from "@material-ui/core";
import React from "react";

interface PropTypes {
    title: string;
}
const Brand: React.FC<PropTypes> = ({ title }) => {
    return (
        <Typography variant="h6" component="h2">
            {title}
        </Typography>
    );
};

export default Brand;
