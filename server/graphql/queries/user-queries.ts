import { GraphQLID, GraphQLList } from "graphql";

import { Context } from "../../common/types";

import UserType from "../typeDefs/User";

import authService from "../../services/auth.service";

import { userResolver, usersResolver } from "../resolvers/user-resolvers";

export const getAllUsersQuery = {
    type: GraphQLList(UserType),
    description: "A list of all Users",
    resolve: (_parent: any, _args: any, context: Context) => {
        //authService.authenticateToken(context); // should throw an error if user is not authenticated
        return usersResolver();
    },
};

export const getSingleUserQuery = {
    type: UserType,
    description: "A single User",
    args: {
        id: { type: GraphQLID },
    },
    resolve: async (_parent: any, args: any) => {
        return userResolver(args);
    },
};
