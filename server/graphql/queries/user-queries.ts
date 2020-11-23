import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLBoolean,
} from "graphql";

import UserType from "../typeDefs/User";

import authService from "../../services/auth.service";

import {
    createUserResolver,
    updateUserPasswordResolver,
    updateUserResolver,
    userResolver,
    usersResolver,
} from "../resolvers/user-resolvers";

export const getAllUsersQuery = {
    type: GraphQLList(UserType),
    description: "A list of all Users",
    resolve: (_parent: any, _args: any, context: any) => {
        authService.authenticateToken(context); // should throw an error if user is not authenticated
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
