import React from "react";

import Navbar from "../../../organisms/Navbar/Public/Navbar";

import { useUsersQuery } from "../../../../graphql/generated/graphql";

const UserDashboard: React.FC = () => {
    return (
        <>
            <Navbar />
            <p>hi</p>
        </>
    );
};

export default UserDashboard;
