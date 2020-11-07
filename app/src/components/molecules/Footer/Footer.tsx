import React from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer: React.FC = () => {
    return (
        <>
            <Box
                display="flex"
                position="relative"
                alignItems="center"
                bgcolor="primary.main"
            >
                <IconButton component="a" href="https://instagram.com">
                    <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton component="a" href="https://twitter.com">
                    <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://github.com/reishaleem/exceptional-outliner"
                >
                    <GitHubIcon fontSize="small" />
                </IconButton>
                <Box ml="auto" p="12px">
                    &copy; 2020 All rights reserved
                </Box>
            </Box>
        </>
    );
};

export default Footer;
