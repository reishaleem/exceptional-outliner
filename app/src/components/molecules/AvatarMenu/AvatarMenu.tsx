import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Logout from "../../atoms/Logout/Logout";

import AuthService from "../../../services/auth.service";

const AvatarDropdown: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );

    const currentUser = AuthService.getCurrentUser();

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
                    alt={currentUser.name[0]}
                    src="User profile image"
                    style={{ marginLeft: "auto", cursor: "pointer" }}
                />
            </Box>
            <Menu
                id="account-menu"
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
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <Divider />
                <Logout>
                    <MenuItem>Logout</MenuItem>
                </Logout>
            </Menu>
        </>
    );
};

export default AvatarDropdown;
