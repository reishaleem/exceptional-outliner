import React from "react";
import Typography from "@material-ui/core/Typography";

interface PropTypes {
    title: string;
}

const NavbarTitle: React.FC<PropTypes> = ({ title }) => {
    return (
        <Typography variant="h6" component="h2">
            {title}
        </Typography>
    );
};

export default NavbarTitle;
