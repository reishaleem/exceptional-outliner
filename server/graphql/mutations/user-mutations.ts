import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";

import UserType from "../typeDefs/User";

import {
    createUserResolver,
    updateUserPasswordResolver,
    updateUserResolver,
} from "../resolvers/user-resolvers";

export const createUserMutation = {
    type: UserType,
    description: "Creates a new User",
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_parent: any, args: any) => {
        return createUserResolver(args);
    },
};

export const updateUserMutation = {
    type: UserType,
    description: "Update a user",
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        penName: { type: GraphQLNonNull(GraphQLString) },
        bio: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_parent: any, args: any) => {
        return updateUserResolver(args);
    },
};

export const updatePasswordMutation = {
    type: UserType,
    description: "Change a user's password",
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        oldPassword: { type: GraphQLNonNull(GraphQLString) },
        newPassword: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_parent: any, args: any) => {
        return updateUserPasswordResolver(args);
    },
};
