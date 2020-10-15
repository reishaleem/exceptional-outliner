import { AppBar, Toolbar, Typography, Button, makeStyles, Container } from "@material-ui/core"
import React from "react"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    link: {
        color: "#fff",
        display: "block",
        textDecoration: "none",
        backgroundColor: "transparent",
    },
    navlink: {
        "&:hover,&:focus": {
           
            background: "rgba(200, 200, 200, 0.2)"
          },
    },
    menuLink: {
        color: "inherit",
        textDecoration: "none",
    },
}));

export default () => {
    const classes = useStyles();
    
   return (
       <>
            <AppBar position="absolute" color="transparent" elevation={0}> 
            <Container maxWidth="lg">
                <Toolbar>
                    <NavLink to={"/"} exact className={`${classes.link} ${classes.title}`}>
                        <Typography variant="h6">
                            The Exceptional Outliner
                        </Typography>
                       
                    </NavLink>
                    <NavLink
                            to="/features"
                            exact
                           className={`${classes.link} ${classes.navlink}`}
                            
                        >
                            <Button color="inherit">Features</Button>
                        </NavLink>
                        <NavLink
                                to="/register"
                                exact
                                className={`${classes.link} ${classes.navlink}`}
                                
                            >
                                <Button color="inherit">Sign Up</Button>
                            </NavLink>
                            <NavLink
                                to="/login"
                                exact
                                className={`${classes.link} ${classes.navlink}`}
                                
                            >
                                <Button color="inherit">Login</Button>
                            </NavLink>
                </Toolbar>
                </Container>
            </AppBar>
       </>
   )
}