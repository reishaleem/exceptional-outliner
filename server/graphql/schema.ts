import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLBoolean,
} from "graphql";

import authService from "../services/auth.service";

import AccessToken from "./typeDefs/AccessToken";
import UserType from "./typeDefs/User";
import WorldType from "./typeDefs/World";

import {
    createUserResolver,
    userResolver,
    usersResolver,
} from "./resolvers/user-resolvers";
import { createWorldResolver } from "./resolvers/world-resolvers";
import { loginResolver, logoutResolver } from "./resolvers/auth-resolvers";

const RootQuery = new GraphQLObjectType({
    name: "Query",
    description: "Root query for gets",
    fields: () => ({
        users: {
            type: GraphQLList(UserType),
            description: "A list of all Users",
            resolve: (_parent, _args, context) => {
                authService.authenticateToken(context); // should throw an error if user is not authenticated
                return usersResolver();
            },
        },
        user: {
            type: UserType,
            description: "A single User",
            args: {
                id: { type: GraphQLID },
            },
            resolve: async (_parent, args) => {
                return userResolver(args);
            },
        },
        world: {
            type: WorldType,
            description: "A single World",
            args: {
                ownerId: { type: GraphQLString },
                worldId: { type: GraphQLID },
            },
            resolve: async () => {},
        },
    }),
});

const RootMutation = new GraphQLObjectType({
    name: "Mutation",
    description: "Root mutation for updates, deletes, and creation",
    fields: () => ({
        createUser: {
            type: UserType,
            description: "Creates a new User",
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: async (_parent, args) => {
                return createUserResolver(args);
            },
        },
        createWorld: {
            type: GraphQLString,
            description:
                "Creates a new World and adds it to the Worlds array of the User with the given ownerId",
            args: {
                ownerId: { type: GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                genres: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
            },
            resolve: async (_parent, args, context) => {
                authService.authenticateToken(context); // should throw an error if user is not authenticated
                return createWorldResolver(args);
            },
        },
        login: {
            type: AccessToken,
            description: "Logs a User in, giving them an AccessToken",
            args: {
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: async (_parent, args, context) => {
                return loginResolver(args, context);
            },
        },
        logout: {
            type: GraphQLBoolean,
            description: "Logs a User out by clearing the refresh token",
            resolve: async (_parent, _args, context) => {
                return logoutResolver(context);
            },
        },
    }),
});

export default new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});
