import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import CardImageForm from "../../../organisms/CardImageForm/CardImageForm";
import Footer from "../../../molecules/Footer/Footer";
import Navbar from "../../../organisms/Navbar/Public/Navbar";
import LoginForm from "../../../molecules/LoginForm/LoginForm";

import OnePiece from "../../../../images/onepieceworldbright.jpg";

const Login: React.FC = () => {
    return (
        <>
            <Box height="100vh" display="flex" flexDirection="column">
                <Navbar />
                <Container maxWidth="lg" style={{ height: "100%" }}>
                    <Box display="flex" alignItems="center" height="100%">
                        <CardImageForm
                            image={OnePiece}
                            height="75%"
                            width="100%"
                            marginLeft="24px"
                            marginRight="24px"
                            formHeader="Login"
                        >
                            <Box width="75%">
                                <LoginForm />
                            </Box>
                        </CardImageForm>
                    </Box>
                </Container>
                <Footer />
            </Box>
        </>
    );
};

export default Login;
