import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";

import { Context } from "../../common/types";

import authService from "../../services/auth.service";

import WorldType from "../typeDefs/World";

import { createWorldResolver } from "../resolvers/world-resolvers";

export const createWorldMutation = {
    type: WorldType,
    description:
        "Creates a new World and adds it to the Worlds array of the User with the given ownerId",
    args: {
        ownerId: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        genres: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
    },
    resolve: async (_parent: any, args: any, context: Context) => {
        authService.authenticateToken(context); // should throw an error if user is not authenticated
        return createWorldResolver(args);
    },
};
