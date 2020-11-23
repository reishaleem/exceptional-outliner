import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Logout from "../../atoms/Logout/Logout";
import { Link } from "react-router-dom";

interface Props {
    items: string[];
    itemDestinations: string[];
    profilePicture?: string;
    name: string;
    variant?: "avatar" | "button";
    refreshLogout?: boolean;
}

const UserMenu: React.FC<Props> = ({
    items,
    itemDestinations,
    profilePicture,
    name,
    variant,
    refreshLogout,
}: Props) => {
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
                {variant === "avatar" ? (
                    <Avatar
                        alt={name[0]}
                        src={profilePicture}
                        style={{ cursor: "pointer" }}
                    />
                ) : (
                    <Button>{name}</Button>
                )}
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
                {items.map((item, i) => {
                    return (
                        <MenuItem
                            onClick={handleClose}
                            key={item}
                            component={Link}
                            to={itemDestinations[i]}
                        >
                            {item}
                        </MenuItem>
                    );
                })}
                <Divider />
                <Logout refreshOnClick={refreshLogout}>
                    <MenuItem>Logout</MenuItem>
                </Logout>
            </Menu>
        </>
    );
};

export default UserMenu;
