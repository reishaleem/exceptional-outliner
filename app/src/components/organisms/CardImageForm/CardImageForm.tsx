import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";

interface PropTypes {
    image: string;
    height: string;
    width: string;
    marginLeft?: string;
    marginRight?: string;
    formHeader: string;
}
const CardImageForm: React.FC<PropTypes> = ({
    image,
    height,
    width,
    marginLeft,
    marginRight,
    formHeader,
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
                    <Grid item md={12} style={{ textAlign: "center" }}>
                        <Typography variant="h2" component="h1" align="center">
                            {formHeader}
                        </Typography>

                        <TextField label="Email" style={{ width: "75%" }} />
                        <br />
                        <TextField label="Password" style={{ width: "75%" }} />
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default CardImageForm;
