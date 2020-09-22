let User = require("../models/UserSchema");

async function createUniverse(ownerId, request, response) {
    const name = request.name;
    const description = request.description;

    // User.findById(ownerId)
    //     .then((user) => {
    //         user.universes.push({
    //             name: name,
    //             description: description,
    //         });
    //         user.save().then(() =>
    //             response.json(
    //                 `created universe for user with username username "${user.username}" !`
    //             )
    //         );
    //     })
    //     .catch((err) => response.status(400).json("Error: " + err));

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

module.exports = {
    createUniverse,
};
