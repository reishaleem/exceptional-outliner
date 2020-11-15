import React from "react";

import Navbar from "../../../organisms/Navbar/Public/Navbar";

import { useUsersQuery } from "../../../../graphql/generated/graphql";

const UserDashboard: React.FC = () => {
    const { error, loading, data } = useUsersQuery({
        fetchPolicy: "network-only",
    });

    return (
        <>
            <Navbar />
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {data && (
                <>
                    {data.users?.map((user) => {
                        return <p>{user?.name}</p>;
                    })}
                </>
            )}
        </>
    );
};

export default UserDashboard;
