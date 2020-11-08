import React from "react";
import OverlayImage from "../../../atoms/OverlayImage/OverlayImage";
import Navbar from "../../../molecules/Navbar/Public/Navbar";

import OnePiece from "../../../../images/onepieceworldbright.jpg";
import Grid from "@material-ui/core/Grid";
import { Box, Card, Container, TextField, Typography } from "@material-ui/core";
import Footer from "../../../molecules/Footer/Footer";
import CardImageForm from "../../../organisms/CardImageForm/CardImageForm";

const Register: React.FC = () => {
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
                        />
                    </Box>
                </Container>
                <Footer />
            </Box>
        </>
    );
};

export default Register;
