import { CreateWorldRequest } from "../common/types";
import Users from "../models/user.model";

async function getAllUserWorlds(ownerId: string) {
    let user = null;
    try {
        user = await Users.findById(ownerId);
    } catch (error) {
        throw error;
    }

    return user!.worlds;
}

async function createWorld(world: CreateWorldRequest) {
    const name = world.name;
    const genres = world.genres;
    const description = world.description;

    let owner = await Users.findById(world.ownerId).exec();
    if (owner == null) {
        throw `User with id ${world.ownerId} does not exist`;
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
    getAllUserWorlds,
    createWorld,
};
