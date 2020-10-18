const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const universeSchema = require("./universe.model")

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 30,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 4,
            maxlength: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            maxlength: 50,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 255,
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
)

const User = mongoose.model("User", userSchema);

module.exports = User;