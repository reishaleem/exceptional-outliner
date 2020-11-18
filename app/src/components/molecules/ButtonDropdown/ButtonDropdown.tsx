import React from "react";
import { Box, Button, Divider, Menu, MenuItem } from "@material-ui/core";
import LogoutMenuItem from "../../atoms/LogoutMenuItem/LogoutMenuItem";
import { Link } from "react-router-dom";

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
                id="simple-menu"
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
