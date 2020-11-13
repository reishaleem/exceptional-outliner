import Users from "../models/user.model";

interface CreateWorldRequest {
    ownerId: string;
    name: string;
    description: string;
    genres: string[];
}

async function createWorld(world: CreateWorldRequest) {
    const name = world.name;
    const genres = world.genres;
    const description = world.description;

    let owner = await Users.findById(world.ownerId).exec();
    if (owner == null) {
        throw "User does not exist";
    }

    owner.worlds.push({
        name: name,
        genres: genres,
        description: description,
        pages: [],
    });

    try {
        owner = await owner.save();

        // return the last created world. Returning owner.save() would return the user itself.
        return owner.worlds[owner.worlds.length - 1];
    } catch (error) {
        throw error;
    }
}

export default {
    createWorld,
};
