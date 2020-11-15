import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

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

export default PageType;
