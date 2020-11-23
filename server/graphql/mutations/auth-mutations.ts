import { GraphQLNonNull, GraphQLString, GraphQLBoolean } from "graphql";

import { Context } from "../../common/types";

import AccessToken from "../typeDefs/AccessToken";

import { loginResolver, logoutResolver } from "../resolvers/auth-resolvers";

export const loginMutation = {
    type: AccessToken,
    description: "Logs a User in, giving them an AccessToken",
    args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_parent: any, args: any, context: Context) => {
        return loginResolver(args, context);
    },
};

export const logoutMutation = {
    type: GraphQLBoolean,
    description: "Logs a User out by clearing the refresh token",
    resolve: async (_parent: any, _args: any, context: Context) => {
        return logoutResolver(context);
    },
};
