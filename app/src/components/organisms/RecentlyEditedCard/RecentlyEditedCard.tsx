import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import useTheme from "@material-ui/core/styles/useTheme";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

import TabPanel from "../../atoms/TabPanel/TabPanel";

interface RecentlyEditedWorld {
    id: string;
    name: string;
    updatedAt: string;
}

interface RecentlyEditedPage {
    id: string;
    name: string;
    updatedAt: string;
}

const RecentlyEditedCard: React.FC = () => {
    const [worlds, setWorlds] = useState<RecentlyEditedWorld[]>();
    const [pages, setPages] = useState<RecentlyEditedPage[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [recentlyEditedTabsValue, setRecentlyEditedTabsValue] = useState<
        number
    >(0);
    const theme = useTheme();

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    useEffect(() => {
        // make api call to get worlds and pages then sort them
        const worldsResponse: RecentlyEditedWorld[] = [
            {
                id: "1",
                name: "World 1",
                updatedAt: "November 21, 2020 at 7:34pm",
            },
            {
                id: "2",
                name: "World 2",
                updatedAt: "November 21, 2020 at 7:34pm",
            },
            {
                id: "3",
                name: "World 3",
                updatedAt: "November 21, 2020 at 7:34pm",
            },
        ];
        const pagesResponse: RecentlyEditedPage[] = [
            {
                id: "1",
                name: "Page 1",
                updatedAt: "November 21, 2020 at 7:34pm",
            },
            {
                id: "2",
                name: "Page 2",
                updatedAt: "November 21, 2020 at 7:34pm",
            },
            {
                id: "3",
                name: "Page 3",
                updatedAt: "November 21, 2020 at 7:34pm",
            },
            {
                id: "4",
                name: "Page 3",
                updatedAt: "November 21, 2020 at 7:34pm",
            },
            {
                id: "5",
                name: "Page 3",
                updatedAt: "November 21, 2020 at 7:34pm",
            },
            {
                id: "7",
                name: "Page 3",
                updatedAt: "November 21, 2020 at 7:34pm",
            },
        ];

        worldsResponse.sort((a, b) => {
            const d1 = new Date(a.updatedAt);
            const d2 = new Date(b.updatedAt);
            if (d1 >= d2) {
                return -1;
            } else {
                return 1;
            }
        });
        pagesResponse.sort((a, b) => {
            const d1 = new Date(a.updatedAt);
            const d2 = new Date(b.updatedAt);
            if (d1 >= d2) {
                return -1;
            } else {
                return 1;
            }
        });
        setWorlds(worldsResponse);
        setPages(pagesResponse);
        setLoading(false);
    }, []);

    const handleRecentlyEditedTabsChange = (event: any, newValue: any) => {
        setRecentlyEditedTabsValue(newValue);
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
                    value={recentlyEditedTabsValue}
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
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <TabPanel value={recentlyEditedTabsValue} index={0}>
                        <Box height={250} position="relative">
                            {worlds!.length > 0 ? (
                                <Box overflow="auto">
                                    <List>
                                        {worlds!.map((world) => {
                                            return (
                                                <ListItem button>
                                                    <ListItemAvatar>
                                                        <Avatar
                                                            src="World image"
                                                            alt={world.name[0]}
                                                        />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={world.name}
                                                        secondary={
                                                            world.updatedAt
                                                        }
                                                    />
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Box>
                            ) : (
                                <p>No worlds created</p>
                            )}
                            <Zoom
                                in={recentlyEditedTabsValue === 0}
                                timeout={transitionDuration}
                                style={{
                                    transitionDelay: `${
                                        recentlyEditedTabsValue === 0
                                            ? transitionDuration.exit
                                            : 0
                                    }ms`,
                                }}
                                unmountOnExit
                            >
                                <Fab
                                    color="primary"
                                    aria-label="add-world"
                                    size="medium"
                                    style={{
                                        position: "absolute",
                                        bottom: theme.spacing(2),
                                        right: theme.spacing(2),
                                    }}
                                    component={Link}
                                    to="/worlds/new"
                                >
                                    <AddIcon />
                                </Fab>
                            </Zoom>
                        </Box>
                    </TabPanel>
                    <TabPanel value={recentlyEditedTabsValue} index={1}>
                        <Box position="relative" height={250}>
                            {pages!.length > 0 ? (
                                <>
                                    <Box overflow="auto">
                                        <List>
                                            {pages!.map((page) => {
                                                return (
                                                    <ListItem button>
                                                        <ListItemAvatar>
                                                            <Avatar
                                                                src="Page image"
                                                                alt={
                                                                    page.name[0]
                                                                }
                                                            />
                                                        </ListItemAvatar>
                                                        <ListItemText
                                                            primary={page.name}
                                                            secondary={
                                                                page.updatedAt
                                                            }
                                                        />
                                                    </ListItem>
                                                );
                                            })}
                                        </List>
                                    </Box>
                                </>
                            ) : (
                                <p>No pages created</p>
                            )}
                            <Zoom
                                in={recentlyEditedTabsValue === 1}
                                timeout={transitionDuration}
                                style={{
                                    transitionDelay: `${
                                        recentlyEditedTabsValue === 1
                                            ? transitionDuration.exit
                                            : 0
                                    }ms`,
                                }}
                                unmountOnExit
                            >
                                <Fab
                                    color="primary"
                                    aria-label="add-page"
                                    size="medium"
                                    style={{
                                        position: "absolute",
                                        bottom: theme.spacing(2),
                                        right: theme.spacing(2),
                                    }}
                                    component={Link}
                                    to="/pages/new"
                                >
                                    <AddIcon />
                                </Fab>
                            </Zoom>
                        </Box>
                    </TabPanel>
                </>
            )}
        </Card>
    );
};

export default RecentlyEditedCard;
