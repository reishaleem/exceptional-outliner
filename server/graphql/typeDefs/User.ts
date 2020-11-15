import {
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";
import WorldType from "./World";

const UserType = new GraphQLObjectType({
    name: "User",
    description: "A user that uses the application",
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

export default UserType;
