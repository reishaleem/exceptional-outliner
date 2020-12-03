import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";
import SearchIcon from "@material-ui/icons/Search";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import MainWrapper from "../../../organisms/Wrapper/Main/MainWrapper";
import Notification from "../../../atoms/Notification/Notification";

import { useUserWorldsQuery } from "../../../../graphql/generated/graphql";

import AuthService from "../../../../services/auth.service";

import { genres, sortByOptions } from "../../../../constants/WorldConstants";

const UserWorldsList: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [openError, setOpenError] = useState<boolean>(false);
    const currentUser = AuthService.getCurrentUser();
    const { loading: worldsLoading, data: worlds } = useUserWorldsQuery({
        variables: {
            ownerId: currentUser.id,
        },
        onError: (error) => {
            setErrorMessage(error.message);
            setOpenError(true);
        },
        onCompleted: () => {
            setErrorMessage("");
        },
    });
    const [genreFilter, setGenreFilter] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<string>("Most Recent");

    const theme = useTheme();

    const onGenreFilterChange = (
        event: React.ChangeEvent<{ value: unknown }>
    ) => {
        setGenreFilter(event.target.value as string[]);
    };

    const onSortByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const order = event.target.value;
        setSortBy(order);
    };

    return (
        <>
            <MainWrapper>
                <Grid item xs={12} sm={12} md={1}></Grid>
                <Grid item xs={12} sm={12} md={10}>
                    <Box display="flex">
                        <Typography
                            variant="h3"
                            component="h2"
                            display="inline"
                        >
                            Your Worlds
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/worlds/new"
                            style={{
                                marginLeft: "auto",
                                marginBlockStart: "0.83em",
                                marginBlockEnd: "0.83em",
                                //marginInlineStart: theme.spacing(2),
                                marginInlineEnd: "0px",
                            }}
                        >
                            Create World
                        </Button>
                    </Box>
                    <Divider />
                    <Box display="flex" alignItems="center">
                        <Typography
                            variant="body1"
                            component="p"
                            display="inline"
                        >
                            Filter:
                        </Typography>
                        <Box>
                            <TextField
                                id="genre-filter"
                                fullWidth
                                select
                                SelectProps={{
                                    multiple: true,
                                    MenuProps: {
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "center",
                                        },
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "center",
                                        },
                                        getContentAnchorEl: null,
                                        PaperProps: {
                                            style: {
                                                maxHeight: 48 * 4.5 + 9,
                                            },
                                        },
                                    },
                                    renderValue: (selected) => {
                                        if (
                                            (selected as string[]).length === 0
                                        ) {
                                            return "Genre";
                                        } else if (
                                            (selected as string[]).length > 1
                                        ) {
                                            return `${
                                                (selected as string[])[0]
                                            } +${
                                                (selected as string[]).length -
                                                1
                                            }`;
                                        }

                                        return (selected as string[]).join(
                                            ", "
                                        );
                                    },
                                    displayEmpty: true,
                                }}
                                variant="outlined"
                                size="small"
                                value={genreFilter}
                                onChange={onGenreFilterChange}
                                style={{
                                    margin: theme.spacing(1),
                                    paddingRight: theme.spacing(2),
                                }}
                            >
                                {genres.map((genre) => {
                                    return (
                                        <MenuItem value={genre} key={genre}>
                                            <Checkbox
                                                checked={
                                                    genreFilter.indexOf(genre) >
                                                    -1
                                                }
                                            />
                                            <ListItemText primary={genre} />
                                        </MenuItem>
                                    );
                                })}
                            </TextField>
                        </Box>

                        <Typography
                            variant="body1"
                            component="p"
                            display="inline"
                        >
                            Sort By:
                        </Typography>
                        <Box width={150}>
                            <TextField
                                id="sortBy-filter"
                                fullWidth
                                select
                                SelectProps={{
                                    MenuProps: {
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "center",
                                        },
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "center",
                                        },
                                        getContentAnchorEl: null,
                                        PaperProps: {
                                            style: {
                                                maxHeight: 48 * 4.5 + 9,
                                            },
                                        },
                                    },
                                    renderValue: (selected) => {
                                        return selected as string;
                                    },
                                }}
                                variant="outlined"
                                size="small"
                                value={sortBy}
                                onChange={onSortByChange}
                                style={{
                                    margin: theme.spacing(1),
                                }}
                            >
                                {sortByOptions.map((option) => {
                                    return (
                                        <MenuItem value={option} key={option}>
                                            <ListItemText primary={option} />
                                        </MenuItem>
                                    );
                                })}
                            </TextField>
                        </Box>
                        <TextField
                            id="input-with-icon-textfield"
                            placeholder="Search..."
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size="small"
                            style={{
                                //margin: theme.spacing(1),
                                marginLeft: "auto",
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={1}></Grid>
                <Grid item xs={12} sm={12} md={1}></Grid>
                <Grid container item xs={12} sm={12} md={10}>
                    {worldsLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <Grid item xs={12} sm={12} md={12}>
                                <List>
                                    {worlds!.userWorlds!.map((world, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                {i ? (
                                                    <Divider
                                                        variant="inset"
                                                        component="li"
                                                    />
                                                ) : (
                                                    ""
                                                )}
                                                <ListItem
                                                    alignItems="flex-start"
                                                    button
                                                    component={Link}
                                                    to={`/worlds/${world!.id}`}
                                                    key={i}
                                                >
                                                    <ListItemAvatar>
                                                        <Avatar
                                                            alt={world!.name!}
                                                            src="World Image"
                                                            variant="square"
                                                        />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={
                                                            <>
                                                                <Box
                                                                    display="flex"
                                                                    alignItems="center"
                                                                >
                                                                    <Typography
                                                                        component="h2"
                                                                        variant="h5"
                                                                        display="inline"
                                                                        color="textPrimary"
                                                                    >
                                                                        {
                                                                            world!
                                                                                .name
                                                                        }
                                                                    </Typography>{" "}
                                                                    {world!
                                                                        .genres!.slice(
                                                                            0,
                                                                            3
                                                                        )
                                                                        .map(
                                                                            (
                                                                                genre
                                                                            ) => {
                                                                                return (
                                                                                    <Chip
                                                                                        size="small"
                                                                                        color="default"
                                                                                        label={
                                                                                            genre
                                                                                        }
                                                                                        style={{
                                                                                            marginLeft:
                                                                                                "5px",
                                                                                        }}
                                                                                    />
                                                                                );
                                                                            }
                                                                        )}
                                                                    {world!
                                                                        .genres!
                                                                        .length >
                                                                        3 && (
                                                                        <Typography
                                                                            variant="body1"
                                                                            component="p"
                                                                            style={{
                                                                                marginLeft:
                                                                                    "5px",
                                                                            }}
                                                                        >
                                                                            +
                                                                            {world!
                                                                                .genres!
                                                                                .length -
                                                                                3}{" "}
                                                                        </Typography>
                                                                    )}
                                                                </Box>
                                                            </>
                                                        }
                                                        secondary={
                                                            <React.Fragment>
                                                                <Typography
                                                                    component="span"
                                                                    variant="body1"
                                                                    color="textPrimary"
                                                                    display="block"
                                                                >
                                                                    {world!
                                                                        .description
                                                                        ? world!
                                                                              .description
                                                                        : "No description available"}
                                                                </Typography>
                                                                <Typography
                                                                    component="span"
                                                                    variant="body2"
                                                                    //color="textPrimary"
                                                                >
                                                                    Created -{" "}
                                                                    {dayjs(
                                                                        parseInt(
                                                                            world!
                                                                                .createdAt!
                                                                        )
                                                                    ).format(
                                                                        "MMM DD, YYYY [at] h:mma"
                                                                    )}{" "}
                                                                    | Updated -{" "}
                                                                    {dayjs(
                                                                        parseInt(
                                                                            world!
                                                                                .updatedAt!
                                                                        )
                                                                    ).format(
                                                                        "MMM DD, YYYY [at] h:mma"
                                                                    )}
                                                                </Typography>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItem>
                                            </React.Fragment>
                                        );
                                    })}
                                </List>
                            </Grid>
                        </>
                    )}
                </Grid>
                <Grid item xs={12} sm={12} md={1}></Grid>
                <Notification
                    message={errorMessage}
                    severity="error"
                    open={openError}
                    setOpen={setOpenError}
                />
            </MainWrapper>
        </>
    );
};

export default UserWorldsList;
