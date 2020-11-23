import worldService from "../../services/world.service";

import { CreateWorldRequest } from "../../common/types";

export function getAllUserWorldsResolver(args: any) {
    return worldService.getAllUserWorlds(args.ownerId);
}

export function createWorldResolver(args: any) {
    const request: CreateWorldRequest = {
        ownerId: args.ownerId,
        name: args.name,
        description: args.description,
        genres: args.genres,
    };
    return worldService.createWorld(request);
}
