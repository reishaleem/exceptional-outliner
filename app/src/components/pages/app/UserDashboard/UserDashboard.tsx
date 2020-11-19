import { Grid } from "@material-ui/core";
import React from "react";
import RecentlyEditedCard from "../../../organisms/RecentlyEditedCard/RecentlyEditedCard";

import MainWrapper from "../../../organisms/Wrapper/Main/MainWrapper";

const UserDashboard: React.FC = () => {
    return (
        <>
            <MainWrapper>
                <Grid item xs={12} sm={12} md={4}>
                    <RecentlyEditedCard />
                </Grid>
            </MainWrapper>
        </>
    );
};

export default UserDashboard;
