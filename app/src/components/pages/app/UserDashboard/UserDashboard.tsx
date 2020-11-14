import React from "react";
import { gql, useQuery } from "@apollo/client";

const user_query = gql`
    query User($id: ID!) {
        user(id: $id) {
            name
        }
    }
`;

const UserDashboard: React.FC = () => {
    const resp = useQuery(user_query, {
        variables: {
            id: "5fa84b8749c2c62b5a48b31c",
        },
    });
    console.log(resp);
    //console.log(error);
    return (
        <>
            {resp.loading && <p>Loading...</p>}
            {resp.error && <p>Error</p>}
            {resp.data && resp.data.user.name}
        </>
    );
};

export default UserDashboard;
