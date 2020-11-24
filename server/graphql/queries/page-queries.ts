import { GraphQLList, GraphQLString } from "graphql";

import PageType from "../typeDefs/Page";

import { getAllUserPagesResolver } from "../resolvers/page-resolvers";

export const getAllUserPagesQuery = {
    type: GraphQLList(PageType),
    description: "A list of all a user's Pages in all their Worlds",
    args: {
        ownerId: { type: GraphQLString },
    },
    resolve: async (_parent: any, args: any) => {
        return getAllUserPagesResolver(args);
    },
};
