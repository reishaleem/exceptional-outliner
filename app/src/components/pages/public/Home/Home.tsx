import React from "react";

import Navbar from "../../../molecules/Navbar/Public/Navbar";
import OverlayImage from "../../../atoms/OverlayImage/OverlayImage";

import OnePiece from "../../../../images/onepieceworld.jpg";

const Home: React.FC = () => {
    return (
        <>
            <OverlayImage image={OnePiece} fullPage>
                <Navbar transparent />
            </OverlayImage>
        </>
    );
};

export default Home;
