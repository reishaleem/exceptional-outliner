import { Card, Grid } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import React from "react";
import TabPanel from "../../../atoms/TabPanel/TabPanel";

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
                            <Tab label="Page One" {...a11yProps(0)} />
                            <Tab label="Page Two" {...a11yProps(1)} />
                            <Tab label="Page Three" {...a11yProps(2)} />
                        </Tabs>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <TabPanel value={value} index={0}>
                        hi
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        there
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        e
                    </TabPanel>
                </Grid>
                <Grid item xs={12} sm={12} md={1}></Grid>
            </MainWrapper>
        </>
    );
};

export default UserSettings;
