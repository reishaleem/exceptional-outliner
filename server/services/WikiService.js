let User = require("../models/UserSchema");

async function createWiki(ownerId, universeId, request, response) {
    const name = request.name;
    const body = request.body;

    const user = await User.findById(ownerId).exec();
    if (user == null) {
        response.status(400).json("Error: user id does not exist");
        return;
    }

    const universe = user.universes.id(universeId);
    universe.wikis.push({
        name: name,
        body: body,
    });

    user.save()
        .then(() =>
            response.json(
                `created wiki for user with username username "${user.username}" !`
            )
        )
        .catch((err) => response.status(400).json("Error: " + err));
}

async function getWiki(ownerId, universeId, wikiId, response) {
    const user = await User.findById(ownerId).exec();
    if (user == null) {
        response.status(400).json("Error: user id does not exist");
        return;
    }

    const wiki = user.universes.id(universeId).wikis.id(wikiId);

    response.json(wiki);
}

async function updateWiki(ownerId, universeId, wikiId, request, response) {
    const name = request.name;
    const body = request.body;

    const user = await User.findById(ownerId).exec();
    if (user == null) {
        response.status(400).json("Error: user id does not exist");
        return;
    }

    const wiki = user.universes.id(universeId).wikis.id(wikiId);
    wiki.name = name;
    wiki.body = body;

    user.save()
        .then(() =>
            response.json(
                `updated wiki for user with username username "${user.username}" !`
            )
        )
        .catch((err) => response.status(400).json("Error: " + err));
}

async function deleteWiki(ownerId, universeId, wikiId, response) {
    const user = await User.findById(ownerId).exec();
    if (user == null) {
        response.status(400).json("Error: user id does not exist");
        return;
    }

    user.universes.id(universeId).wikis.id(wikiId).remove();

    user.save()
        .then(() =>
            response.json(
                `removed wiki for user with username username "${user.username}" !`
            )
        )
        .catch((err) => response.status(400).json("Error: " + err));
}

module.exports = {
    createWiki,
    getWiki,
    updateWiki,
    deleteWiki,
};
