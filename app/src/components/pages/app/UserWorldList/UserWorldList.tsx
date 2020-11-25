import { Grid } from "@material-ui/core";
import React from "react";

import MainWrapper from "../../../organisms/Wrapper/Main/MainWrapper";

import { useUserWorldsQuery } from "../../../../graphql/generated/graphql";
import AuthService from "../../../../services/auth.service";

const UserWorldsList: React.FC = () => {
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
    return (
        <>
            <MainWrapper>
                <Grid item xs={12} sm={12} md={12}>
                    stuff for searching, like LinkedIn, goes here...
                </Grid>
                <Grid container item xs={12} sm={12} md={12}>
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
            </MainWrapper>
        </>
    );
};

export default UserWorldsList;
