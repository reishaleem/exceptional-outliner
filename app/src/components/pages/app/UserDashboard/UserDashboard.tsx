import React from "react";
import { defaultDataIdFromObject, gql, useQuery } from "@apollo/client";
import { useUsersQuery } from "../../../../graphql/generated/graphql";
import { getCurrentUser, setAccessToken } from "../../../../utilities/auth";
import Navbar from "../../../organisms/Navbar/Public/Navbar";

const user_query = gql`
    query User($id: ID!) {
        user(id: $id) {
            name
        }
    }
`;

const UserDashboard: React.FC = () => {
    const { error, loading, data, client } = useUsersQuery();
    console.log(data);
    //console.log(error);
    console.log(getCurrentUser());
    async function logout() {
        setAccessToken("");
        await client.resetStore(); // this will also need to clear the refresh token for the user...
    }
    return (
        <>
            <Navbar />
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {data && (
                <>
                    {data.users?.map((user) => {
                        return <p>user.name</p>;
                    })}
                    <button onClick={() => logout()}>logout</button>
                </>
            )}
        </>
    );
};

export default UserDashboard;
