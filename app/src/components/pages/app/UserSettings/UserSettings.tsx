import { Card, Divider, Grid, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import React from "react";
import TabPanel from "../../../atoms/TabPanel/TabPanel";
import ChangePasswordForm from "../../../molecules/ChangePasswordForm/ChangePasswordForm";
import ChangeProfileForm from "../../../molecules/ChangeProfileForm/ChangeProfileForm";

import MainWrapper from "../../../organisms/Wrapper/Main/MainWrapper";

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
    },
    tabs: {
        borderLeft: `1px solid ${theme.palette.divider}`,
    },
    leftIndicator: {
        left: "0px",
    },
    wrapper: {
        alignItems: "flex-start",
    },
}));

// As things are, there is one universal Settings component that does not render a new page with each click. Instead, it just renders
// smaller parts and stays on the same page. This user experience may not be the best, but the reason for avoiding simply rendering 3
// pages with the same content apart from the form is that the indicator for the MUI-tabs does not smoothly scroll that way. But that
// may not be that bad. Here is the github issue: https://github.com/reishaleem/exceptional-outliner/issues/7
const UserSettings: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <MainWrapper>
                <Grid item xs={12} sm={12} md={1}></Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <Card elevation={1}>
                        <Tabs
                            orientation="vertical"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                            classes={{
                                indicator: classes.leftIndicator,
                            }}
                        >
                            <Tab
                                label="Profile"
                                {...a11yProps(0)}
                                classes={{
                                    wrapper: classes.wrapper,
                                }}
                            />
                            <Tab
                                label="Security"
                                {...a11yProps(1)}
                                classes={{
                                    wrapper: classes.wrapper,
                                }}
                            />
                            <Tab
                                label="Delete"
                                {...a11yProps(2)}
                                classes={{
                                    wrapper: classes.wrapper,
                                }}
                            />
                        </Tabs>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <TabPanel value={value} index={0}>
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <Typography variant="h3" component="h2">
                                    Profile
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item md={8}>
                                <ChangeProfileForm />
                            </Grid>
                            <Grid item md={4}>
                                Profile picture...
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <Typography variant="h3" component="h2">
                                    Change password
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item md={8}>
                                <ChangePasswordForm />
                            </Grid>
                            <Grid item md={4}></Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <Typography variant="h3" component="h2">
                                    Delete account
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item md={12}>
                                <ChangeProfileForm />
                            </Grid>
                        </Grid>
                    </TabPanel>
                </Grid>
                <Grid item xs={12} sm={12} md={1}></Grid>
            </MainWrapper>
        </>
    );
};

export default UserSettings;
