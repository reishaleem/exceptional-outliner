import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

interface Props {
    buttonNames: Array<string>;
    buttonDestinations: Array<string>;
    align?: string;
}

const NavbarButtonList: React.FC<Props> = ({
    buttonNames,
    buttonDestinations,
    align,
}: Props) => {
    return (
        <Box marginLeft={align === "right" && "auto"}>
            {buttonNames.map((buttonName, i) => {
                return (
                    <Button key={i} component={Link} to={buttonDestinations[i]}>
                        {buttonName}
                    </Button>
                );
            })}
        </Box>
    );
};

export default NavbarButtonList;
