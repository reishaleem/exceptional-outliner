let Users = require("../models/user.model");

async function createUniverse(ownerId, request, response) {
    const name = request.name;
    const genre = request.genre;
    const description = request.description;

    const owner = await Users.findById(ownerId).exec();
    if (owner == null) {
        response.status(400).json("Error: user id does not exist");
        return;
    }

    owner.universes.push({
        name: name,
        genres: genre,
        description: description,
    });
    owner.save()
        .then((ownerWithNewUniverse) =>
            response.json({
                message: `created universe for user with username username "${owner.username}" !`,
                universe: owner.universes[owner.universes.length - 1], // last universe is the newest one saved
            })
        )
        .catch((err) => response.status(400).json("Error: " + err));
}

module.exports = {
    createUniverse
}