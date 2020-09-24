let User = require("../models/UserSchema");
const { use } = require("../routes/UniverseRouter");

async function createUniverse(ownerId, request, response) {
    const name = request.name;
    const description = request.description;

    const user = await User.findById(ownerId).exec();
    if (user == null) {
        response.status(400).json("Error: user id does not exist");
        return;
    }

    user.universes.push({
        name: name,
        description: description,
    });
    user.save()
        .then((universe) =>
            response.json({
                message: `created universe for user with username username "${user.username}" !`,
                universe: user.universes[user.universes.length - 1],
            })
        )
        .catch((err) => response.status(400).json("Error: " + err));
}

async function getUniverse(ownerId, universeId, response) {
    const user = await User.findById(ownerId).exec();
    if (user == null) {
        response.status(400).json("Error: user id does not exist");
        return;
    }

    const universe = user.universes.id(universeId);

    response.json(universe);
}

async function getUniverseList(ownerId, response) {
    const user = await User.findById(ownerId).exec();
    if (user == null) {
        response.status(400).json("Error: user id does not exist");
        return;
    }

    response.json(user.universes);
}

async function updateUniverse(ownerId, universeId, request, response) {
    const name = request.name;
    const description = request.description;

    const user = await User.findById(ownerId).exec();
    if (user == null) {
        response.status(400).json("Error: user id does not exist");
        return;
    }

    const universe = user.universes.id(universeId);
    universe.name = name;
    universe.description = description;

    user.save()
        .then(() =>
            response.json(
                `updated universe for user with username username "${user.username}" !`
            )
        )
        .catch((err) => response.status(400).json("Error: " + err));
}

async function deleteUniverse(ownerId, universeId, response) {
    const user = await User.findById(ownerId).exec();
    if (user == null) {
        response.status(400).json("Error: user id does not exist");
        return;
    }

    user.universes.id(universeId).remove();

    user.save()
        .then(() =>
            response.json(
                `removed universe for user with username username "${user.username}" !`
            )
        )
        .catch((err) => response.status(400).json("Error: " + err));
}

module.exports = {
    createUniverse,
    getUniverse,
    getUniverseList,
    updateUniverse,
    deleteUniverse,
};
