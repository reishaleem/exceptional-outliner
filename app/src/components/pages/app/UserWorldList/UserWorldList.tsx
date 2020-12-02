import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    Checkbox,
    Chip,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    MenuItem,
    Select,
    TextField,
    Tooltip,
    Typography,
    useTheme,
} from "@material-ui/core";
import OnePiece from "../../../../images/onepieceworld.jpg";
import CreateIcon from "@material-ui/icons/Create";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import React, { useState } from "react";

import MainWrapper from "../../../organisms/Wrapper/Main/MainWrapper";

import { useUserWorldsQuery } from "../../../../graphql/generated/graphql";
import AuthService from "../../../../services/auth.service";
import SearchIcon from "@material-ui/icons/Search";
import { genres, sortByOptions } from "../../../../constants/WorldConstants";
import { Link } from "react-router-dom";
const UserWorldsList: React.FC = () => {
    // const currentUser = AuthService.getCurrentUser();
    // const {
    //     loading: worldsLoading,
    //     error: worldsError,
    //     data: worlds,
    // } = useUserWorldsQuery({
    //     variables: {
    //         ownerId: currentUser.id,
    //     },
    // });
    const [genreFilter, setGenreFilter] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<string>("Most Recent");
    console.log(genreFilter);
    const worldsLoading = false;
    let worlds = {
        userWorlds: [
            {
                id: "1",
                name: "Narnia",
                description: "",
                genres: ["Fantasy"],
                createdAt: "11/25/2020 at 7:58pm",
                updatedAt: "11/25/2020 at 7:58pm",
            },
            {
                id: "2",
                name: "Earth",
                description: "",
                genres: ["Fantasy", "Nonfiction", "Romance"],
                createdAt: "11/25/2020 at 7:58pm",
                updatedAt: "11/25/2020 at 7:58pm",
            },
            {
                id: "3",
                name: "Middle Earth",
                description:
                    "This is a test description that is supposed to be a couple sentences long. The second line may or may not go onto the next line but if it does then no worries because I have already aligned the Avatar at the start",
                genres: ["Fantasy"],
                createdAt: "11/25/2020 at 7:58pm",
                updatedAt: "11/25/2020 at 7:58pm",
            },
            {
                id: "4",
                name: "Earth2",
                description: "",
                genres: [
                    "Nonfiction",
                    "Romance",
                    "Thriller",
                    "Adventure",
                    "Action",
                ],
                createdAt: "11/25/2020 at 7:58pm",
                updatedAt: "11/25/2020 at 7:58pm",
            },
        ],
    };
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
                            to="/app/worlds/new"
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
                                                    key={i}
                                                >
                                                    <ListItemAvatar>
                                                        <Avatar
                                                            alt={world.name}
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
                                                                            world.name
                                                                        }
                                                                    </Typography>{" "}
                                                                    {world.genres
                                                                        .slice(
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
                                                                    {world
                                                                        .genres
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
                                                                            {world
                                                                                .genres
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
                                                                    {world.description
                                                                        ? world.description
                                                                        : "No description available"}
                                                                </Typography>
                                                                <Typography
                                                                    component="span"
                                                                    variant="body2"
                                                                    //color="textPrimary"
                                                                >
                                                                    Created -{" "}
                                                                    {
                                                                        world.createdAt
                                                                    }{" "}
                                                                    | Updated -{" "}
                                                                    {
                                                                        world.updatedAt
                                                                    }
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
            </MainWrapper>
        </>
    );
};

export default UserWorldsList;
