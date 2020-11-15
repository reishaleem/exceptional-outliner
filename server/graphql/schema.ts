import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLBoolean,
} from "graphql";
import User from "../models/user.model";
import authService from "../services/auth.service";
import { NextFunction, Response } from "express";

import userService from "../services/user.service";
import worldService from "../services/world.service";
import { resolve } from "path";

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        penName: { type: GraphQLString },
        bio: { type: GraphQLString },
        worlds: { type: GraphQLList(WorldType) },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
    }),
});

const WorldType = new GraphQLObjectType({
    name: "World",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        genres: { type: GraphQLList(GraphQLString) },
        pages: { type: GraphQLList(PageType) },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
    }),
});

const PageType = new GraphQLObjectType({
    name: "Page",
    description: "The wiki-like pages that belong to a World",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        body: { type: GraphQLString },
        type: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
    }),
});

const AccessToken = new GraphQLObjectType({
    name: "AccessToken",
    description: "An access token for authorization",
    fields: () => ({
        accessToken: { type: GraphQLString },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "Query",
    description: "The top level query",
    fields: () => ({
        users: {
            type: GraphQLList(UserType),
            description: "List of users",
            resolve: (_parent, _args, context) => {
                authService.authenticateToken(context); // should throw an error if user is not authenticated
                try {
                    return userService.getAllUsers();
                } catch (error) {
                    throw error;
                }
            },
        },
        user: {
            type: UserType,
            description: "A single User",
            args: {
                id: { type: GraphQLID },
            },
            resolve: async (parent, args) => {
                try {
                    return userService.getUserById(args.id);
                } catch (error) {
                    throw error;
                }
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
            description: "Create a new user",
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const request = {
                    name: args.name,
                    email: args.email,
                    password: args.password,
                };
                try {
                    return userService.createUser(request);
                } catch (error) {
                    throw error;
                }
            },
        },
        createWorld: {
            type: GraphQLString,
            description: "Add a World to a user",
            args: {
                ownerId: { type: GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                genres: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
            },
            resolve: async (parent, args, context) => {
                authService.authenticateToken(context); // should throw an error if user is not authenticated
                console.log();
                // const request = {
                //     ownerId: args.ownerId,
                //     name: args.name,
                //     description: args.description,
                //     genres: args.genres,
                // };
                // return worldService.createWorld(request);
                return `Your user id is ${context.user.id} and your name is ${context.user.name}`;
            },
        },
        login: {
            type: AccessToken,
            description: "Log a user in, giving them a token",
            args: {
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args, context) => {
                const request = {
                    email: args.email,
                    password: args.password,
                };
                return authService.login(request, context.res);
            },
        },
        logout: {
            type: GraphQLBoolean,
            description: "Log a user out",
            resolve: async (_parent, _args, context) => {
                const res: Response = context.res;
                res.clearCookie("rjid");
                return true;
            },
        },
    }),
});

export default new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});
