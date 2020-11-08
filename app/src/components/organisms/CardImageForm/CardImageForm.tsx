import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface PropTypes {
    image: string;
    height: string;
    width: string;
    marginLeft?: string;
    marginRight?: string;
    formHeader: string;
    children: any;
}

const CardImageForm: React.FC<PropTypes> = ({
    image,
    height,
    width,
    marginLeft,
    marginRight,
    formHeader,
    children,
}) => {
    return (
        <Card
            style={{
                height: height,
                width: width,
                marginLeft: marginLeft,
                marginRight: marginRight,
            }}
        >
            <Grid container style={{ height: "100%" }}>
                <Grid item md={6}>
                    <div
                        style={{
                            height: "100%",
                            backgroundImage: "url(" + image + ")",
                            backgroundSize: "cover",
                        }}
                    ></div>
                </Grid>
                <Grid container item md={6} alignItems="center">
                    <Grid item md={12}>
                        <Typography variant="h2" component="h1" align="center">
                            {formHeader}
                        </Typography>
                        <Box
                            width="100%"
                            display="flex"
                            justifyContent="center"
                        >
                            {children}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default CardImageForm;
