import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

interface PropTypes {
    icon?: any;
    title?: string;
    body: string;
    size: string;
}

const useStyles = (size: string) =>
    makeStyles(() => ({
        circular: {
            height: size,
            width: size,
            borderRadius: "50%",
        },
    }));

const CircularCard: React.FC<PropTypes> = ({ icon, title, body, size }) => {
    const classes = useStyles(size)();

    return (
        <Card className={classes.circular}>
            <CardContent>
                {icon && (
                    <Typography
                        variant="h4"
                        component="h2"
                        align="center"
                        gutterBottom
                    >
                        {icon}
                    </Typography>
                )}
                {title && (
                    <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                )}
                <Typography variant="subtitle1" component="p">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CircularCard;
