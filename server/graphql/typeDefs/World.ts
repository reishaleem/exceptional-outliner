import {
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";
import PageType from "./Page";

const WorldType = new GraphQLObjectType({
    name: "World",
    description:
        "The worlds of the users' stories. Pretty much everything is associated with a World in some way, such as Pages",
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

export default WorldType;
