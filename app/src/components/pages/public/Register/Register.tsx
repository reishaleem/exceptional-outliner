import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import CardImageForm from "../../../organisms/CardImageForm/CardImageForm";
import Footer from "../../../organisms/Footer/Footer";
import Navbar from "../../../organisms/Navbar/Public/Navbar";
import RegisterForm from "../../../molecules/RegisterForm/RegisterForm";

import OnePiece from "../../../../images/onepieceworldbright.jpg";
import AuthService from "../../../../services/auth.service";

const Register: React.FC = () => {
    const currentUser = AuthService.getCurrentUser();
    const loggedIn = AuthService.isLoggedIn();

    return (
        <>
            <Box height="100vh" display="flex" flexDirection="column">
                <Navbar
                    userLoggedIn={loggedIn}
                    userName={currentUser ? currentUser.name : "N/A"}
                />
                <Container maxWidth="lg" style={{ height: "100%" }}>
                    <Box display="flex" alignItems="center" height="100%">
                        <CardImageForm
                            image={OnePiece}
                            height="75%"
                            width="100%"
                            marginLeft="24px"
                            marginRight="24px"
                            formHeader="Sign Up"
                        >
                            <Box width="75%">
                                <RegisterForm />
                            </Box>
                        </CardImageForm>
                    </Box>
                </Container>
                <Footer />
            </Box>
        </>
    );
};

export default Register;
