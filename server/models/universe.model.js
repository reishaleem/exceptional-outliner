const mongoose = require("mongoose");
const wikiSchema = require("./wiki.model");

const Schema = mongoose.Schema;


const universeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
        genres: {
            type: Array, // array of strings
            trim: true,
        },
        description: {
            type: String,
            time: true,
            maxlength: 500,
        },
        wikis: [wikiSchema]
    },
    {
        timestamps: true
    }
)

module.exports = universeSchema;