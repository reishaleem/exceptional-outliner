const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = require("graphql");

const userService = require("../services/user.service")

const User = require("../models/user.model.ts");

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        penName: {type: GraphQLString},
        bio: {type: GraphQLString},
        universes: {type: GraphQLList(UniverseType)}
    })
})

const UniverseType = new GraphQLObjectType({
    name: "Universe",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        genres: {type: GraphQLList(GraphQLString)},
    })
})

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "The top level query",
    fields: () => ({
        user: {
            type: UserType,
            description: "A single User",
            args: {
                id: {type: GraphQLString}
            },
            resolve: async (parent, args) => {
                try {
                    const user = User.findById(args.id);
                    return user;
                } catch (error) {
                    throw error;
                }
            }
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
                
            }
        },
    })
})

const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root mutation for updates, deletes, and creation",
    fields: () => ({
        addUniverse: {
            type: UniverseType,
            description: "Add a Universe to a user",
            args: {
                ownerId: { type: GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: async (parent, args) => {
                const name = args.name;
                const description = args.description;

                const user = await User.findById(args.ownerId).exec();
                if (!user) {
                    response.status(400).json("Error: user id does not exist");
                    return;
                }

                user.universes.push({
                    name: name,
                    description: description,
                });
                
                try {
                    const savedUser = await user.save();
                    return savedUser.universes[savedUser.universes.length - 1]
                } catch (error) {
                    throw error;
                }
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})