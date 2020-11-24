import Users from "../models/user.model";
import { PageFields } from "../models/wiki.model";

async function getAllUserPages(ownerId: string) {
    let user = null;
    try {
        user = await Users.findById(ownerId);
    } catch (error) {
        throw error;
    }

    const worlds = user!.worlds;
    let pages: PageFields[] = [];
    worlds.forEach((world) => pages.concat(world.pages));

    return pages;
}

export default {
    getAllUserPages,
};
