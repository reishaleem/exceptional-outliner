import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";

import NavbarButtonList from "../../../molecules/NavbarButtonList/NavbarButtonList";
import NavbarTitle from "../../../atoms/NavbarTitle/NavbarTitle";
import UserMenu from "../../../molecules/UserMenu/UserMenu";

interface Props {
    transparent?: boolean;
    userName: string;
    userLoggedIn: boolean;
}

const Navbar: React.FC<Props> = ({
    transparent,
    userName,
    userLoggedIn,
}: Props) => {
    return (
        <AppBar
            position="static"
            elevation={0}
            color={transparent ? "transparent" : "primary"}
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <NavbarTitle link to="/" title="The Exceptional Outliner" />
                    {userLoggedIn ? (
                        <UserMenu
                            items={["App"]}
                            name={userName}
                            variant="button"
                            refreshLogout
                        />
                    ) : (
                        <NavbarButtonList
                            buttonNames={["Sign Up", "Login"]}
                            buttonDestinations={["/register", "/login"]}
                            align="right"
                        />
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
