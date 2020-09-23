let User = require("../models/UserSchema");

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
        .then(() =>
            response.json(
                `created universe for user with username username "${user.username}" !`
            )
        )
        .catch((err) => response.status(400).json("Error: " + err));
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
    updateUniverse,
    deleteUniverse,
};
