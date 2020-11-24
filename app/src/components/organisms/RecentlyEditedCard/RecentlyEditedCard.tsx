import React, { useState } from "react";
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
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import TabPanel from "../../atoms/TabPanel/TabPanel";
import {
    useUserPagesQuery,
    useUserWorldsQuery,
} from "../../../graphql/generated/graphql";
import AuthService from "../../../services/auth.service";

const RecentlyEditedCard: React.FC = () => {
    const currentUser = AuthService.getCurrentUser();
    const {
        loading: worldsLoading,
        error: worldsError,
        data: worlds,
    } = useUserWorldsQuery({
        variables: {
            ownerId: currentUser.id,
        },
    });
    const {
        loading: pagesLoading,
        error: pagesError,
        data: pages,
    } = useUserPagesQuery({
        variables: {
            ownerId: currentUser.id,
        },
    });
    const [recentlyEditedTabsValue, setRecentlyEditedTabsValue] = useState<
        number
    >(0);
    const theme = useTheme();

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

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
            {worldsLoading || pagesLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <TabPanel value={recentlyEditedTabsValue} index={0}>
                        <Box height={250} position="relative">
                            {worlds!.userWorlds!.length > 0 ? (
                                <Box height="100%" overflow="auto">
                                    <List>
                                        {worlds!.userWorlds!.map((world) => {
                                            return (
                                                <ListItem
                                                    button
                                                    key={world!.id!}
                                                >
                                                    <ListItemAvatar>
                                                        <Avatar
                                                            src="World image"
                                                            alt={
                                                                world!.name![0]
                                                            }
                                                        />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={world!.name}
                                                        secondary={dayjs(
                                                            parseInt(
                                                                world!
                                                                    .updatedAt!
                                                            )
                                                        ).format(
                                                            "MMM DD, YYYY [at] h:mma"
                                                        )}
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
                        <Box height={250} position="relative">
                            {pages!.userPages!.length > 0 ? (
                                <>
                                    <Box height="100%" overflow="auto">
                                        <List>
                                            {pages!.userPages!.map((page) => {
                                                return (
                                                    <ListItem button>
                                                        <ListItemAvatar>
                                                            <Avatar
                                                                src="Page image"
                                                                alt={
                                                                    page!
                                                                        .name![0]
                                                                }
                                                            />
                                                        </ListItemAvatar>
                                                        <ListItemText
                                                            primary={page!.name}
                                                            secondary={dayjs(
                                                                parseInt(
                                                                    page!
                                                                        .updatedAt!
                                                                )
                                                            ).format(
                                                                "MMM DD, YYYY [at] h:mma"
                                                            )}
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
