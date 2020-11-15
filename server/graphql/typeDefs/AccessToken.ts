import { GraphQLObjectType, GraphQLString } from "graphql";

const AccessToken = new GraphQLObjectType({
    name: "AccessToken",
    description: "An access token for authorization",
    fields: () => ({
        accessToken: { type: GraphQLString },
    }),
});

export default AccessToken;
