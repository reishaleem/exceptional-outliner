import { GraphQLList, GraphQLString } from "graphql";

import WorldType from "../typeDefs/World";

import { getAllUserWorldsResolver } from "../resolvers/world-resolvers";

export const getAllUserWorldsQuery = {
    type: GraphQLList(WorldType),
    description: "A single World",
    args: {
        ownerId: { type: GraphQLString },
    },
    resolve: async (_parent: any, args: any) => {
        return getAllUserWorldsResolver(args);
    },
};
