import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { getAllUsersQuery, getSingleUserQuery } from "./queries/user-queries";
import { getAllUserWorldsQuery } from "./queries/world-queries";

import { loginMutation, logoutMutation } from "./mutations/auth-mutations";
import {
    createUserMutation,
    updatePasswordMutation,
    updateUserMutation,
} from "./mutations/user-mutations";
import { createWorldMutation } from "./mutations/world-mutations";
import { getAllUserPagesQuery } from "./queries/page-queries";

const RootQuery = new GraphQLObjectType({
    name: "Query",
    description: "Root query for gets",
    fields: () => ({
        users: getAllUsersQuery,
        user: getSingleUserQuery,
        userWorlds: getAllUserWorldsQuery,
        userPages: getAllUserPagesQuery,
    }),
});

const RootMutation = new GraphQLObjectType({
    name: "Mutation",
    description: "Root mutation for updates, deletes, and creation",
    fields: () => ({
        login: loginMutation,
        logout: logoutMutation,
        createUser: createUserMutation,
        updateUser: updateUserMutation,
        updateUserPassword: updatePasswordMutation,
        createWorld: createWorldMutation,
    }),
});

export default new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});
