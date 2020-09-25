const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wikiSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
        body: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const universeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 30,
        },
        description: {
            type: String,
            time: true,
            maxlength: 500,
        },
        wikis: [wikiSchema],
    },
    {
        timestamps: true,
    }
);

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 4,
            maxlength: 20,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 255,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            maxlength: 50,
        },
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 30,
        },
        bio: {
            type: String,
            trim: true,
            maxlength: 255,
        },
        universes: [universeSchema],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
