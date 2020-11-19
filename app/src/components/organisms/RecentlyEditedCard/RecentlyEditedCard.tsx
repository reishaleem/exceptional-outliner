import React from "react";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Tab,
    Tabs,
    Typography,
} from "@material-ui/core";

function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={0}>{children}</Box>}
        </div>
    );
}

const RecentlyEditedCard: React.FC = () => {
    const [recentlyEdtedTabsValue, setRecentlyEdtedTabsValue] = React.useState(
        0
    );

    const handleRecentlyEditedTabsChange = (event: any, newValue: any) => {
        setRecentlyEdtedTabsValue(newValue);
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="h2">
                    Recently Edited
                </Typography>
            </CardContent>
            <Paper square elevation={0}>
                <Tabs
                    value={recentlyEdtedTabsValue}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleRecentlyEditedTabsChange}
                    aria-label="recently edited tabs"
                    variant="fullWidth"
                >
                    <Tab label="Worlds" />
                    <Tab label="Pages" />
                </Tabs>
            </Paper>
            <TabPanel value={recentlyEdtedTabsValue} index={0}>
                <List>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>I</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="World Name"
                            secondary="Updated time"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>I</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="World Name"
                            secondary="Updated time"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>I</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="World Name"
                            secondary="Updated time"
                        />
                    </ListItem>
                </List>
            </TabPanel>
            <TabPanel value={recentlyEdtedTabsValue} index={1}>
                <List>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>W</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Page Name"
                            secondary="Updated time"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>W</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Page Name"
                            secondary="Updated time"
                        />
                    </ListItem>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>W</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Page Name"
                            secondary="Updated time"
                        />
                    </ListItem>
                </List>
            </TabPanel>
        </Card>
    );
};

export default RecentlyEditedCard;
