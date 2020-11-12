import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull,
} from "graphql";

import userService from "../services/user.service";

import User from "../models/user.model";

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        penName: { type: GraphQLString },
        bio: { type: GraphQLString },
        worlds: { type: GraphQLList(WorldType) },
    }),
});

const WorldType = new GraphQLObjectType({
    name: "World",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        genres: { type: GraphQLList(GraphQLString) },
    }),
});

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "The top level query",
    fields: () => ({
        user: {
            type: UserType,
            description: "A single User",
            args: {
                id: { type: GraphQLString },
            },
            resolve: async (parent, args) => {
                try {
                    const user = User.findById(args.id);
                    return user;
                } catch (error) {
                    throw error;
                }
            },
        },
        users: {
            type: GraphQLList(UserType),
            description: "List of users",
            resolve: () => {
                try {
                    return userService.getAllUsers();
                } catch (error) {
                    throw error;
                }
            },
        },
    }),
});

const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root mutation for updates, deletes, and creation",
    fields: () => ({
        addWorld: {
            type: WorldType,
            description: "Add a World to a user",
            args: {
                ownerId: { type: GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                genres: { type: GraphQLList(GraphQLString) },
                pages: { type: GraphQLList(GraphQLString) }, // this needs to be changed to list of PageTypes, just have not made yet
            },
            resolve: async (parent, args) => {
                const name: string = args.name;
                const description: string = args.description;

                const user = await User.findById(args.ownerId).exec();
                if (!user) {
                    // need to learn how to send status codes back to client with graphql
                    //response.status(400).json("Error: user id does not exist");
                    return;
                }

                user.worlds.push({
                    name: name,
                    description: description,
                    genres: ["Fantasy"],
                    pages: [],
                });

                try {
                    const savedUser = await user.save();
                    return savedUser.worlds[savedUser.worlds.length - 1];
                } catch (error) {
                    throw error;
                }
            },
        },
    }),
});

export default new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
});
