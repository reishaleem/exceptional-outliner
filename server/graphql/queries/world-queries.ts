import { GraphQLID, GraphQLString } from "graphql";

import WorldType from "../typeDefs/World";

export const getAllWorldsQuery = {
    type: WorldType,
    description: "A single World",
    args: {
        ownerId: { type: GraphQLString },
        worldId: { type: GraphQLID },
    },
    resolve: async () => {},
};
