import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Box, Menu, MenuItem } from "@material-ui/core";

interface Props {}

const AvatarDropdown: React.FC = () => {
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
                <Avatar
                    alt="First letter of user's Name"
                    src="User profile image"
                    style={{ marginLeft: "auto", cursor: "pointer" }}
                />
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
                <MenuItem onClick={handleClose}>Hello, User</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default AvatarDropdown;
