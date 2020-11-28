import {
    Box,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    Input,
    InputAdornment,
    InputLabel,
    ListItemText,
    MenuItem,
    Select,
    TextField,
    Typography,
    useTheme,
} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import React, { useState } from "react";

import MainWrapper from "../../../organisms/Wrapper/Main/MainWrapper";

import { useUserWorldsQuery } from "../../../../graphql/generated/graphql";
import AuthService from "../../../../services/auth.service";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@material-ui/lab";

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
    console.log(genreFilter);
    const worldsLoading = false;
    const worlds = {
        userWorlds: [
            {
                name: "Narnia",
                description: "A test",
                genres: ["Fantasy"],
                createdAt: "November 25, 2020 at 7:58pm",
                updatedAt: "November 25th, 2020 at 7:58pm",
            },
        ],
    };
    const theme = useTheme();

    const onGenreFilterChange = (
        event: React.ChangeEvent<{ value: unknown }>
    ) => {
        setGenreFilter(event.target.value as string[]);
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

                        <TextField
                            id="input-with-icon-textfield"
                            placeholder="Search..."
                            //variant="filled"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            style={{
                                // marginLeft: "auto",
                                marginBlockStart: "0.83em",
                                marginBlockEnd: "0.83em",
                                marginInlineStart: theme.spacing(2),
                                marginInlineEnd: "0px",
                            }}
                        />
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
                        <Box width={130} component={"span"}>
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
                                }}
                            >
                                <MenuItem value={"Fantasy"}>
                                    <Checkbox
                                        checked={
                                            genreFilter.indexOf("Fantasy") > -1
                                        }
                                    />
                                    <ListItemText primary={"Fantasy"} />
                                </MenuItem>
                                <MenuItem value={"Nonfiction"}>
                                    <Checkbox
                                        checked={
                                            genreFilter.indexOf("Nonfiction") >
                                            -1
                                        }
                                    />
                                    <ListItemText primary={"Nonfiction"} />
                                </MenuItem>
                                <MenuItem value={"Romance"}>
                                    <Checkbox
                                        checked={
                                            genreFilter.indexOf("Romance") > -1
                                        }
                                    />
                                    <ListItemText primary={"Romance"} />
                                </MenuItem>
                            </TextField>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={1}></Grid>
                <Grid item xs={12} sm={12} md={1}></Grid>
                <Grid container item xs={12} sm={12} md={10}>
                    {worldsLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <Grid item xs={12} sm={12} md={5}>
                                {worlds!.userWorlds!.map((world) => {
                                    return <p>{world!.genres!}</p>;
                                })}
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                The view for the currently selected item. So
                                probably has to be a TabPanel thing.
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
