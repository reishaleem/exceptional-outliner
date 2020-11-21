import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

import LogoutMenuItem from "../../atoms/LogoutMenuItem/LogoutMenuItem";

const ButtonDropdown: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box onClick={handleClick} marginLeft="auto">
                <Button style={{ marginLeft: "auto" }}>User's Name</Button>
            </Box>
            <Menu
                id="app-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                getContentAnchorEl={null}
                elevation={1}
            >
                <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to="/dashboard"
                >
                    Dashboard
                </MenuItem>
                <Divider />
                <LogoutMenuItem refreshOnClick />
            </Menu>
        </>
    );
};

export default ButtonDropdown;
