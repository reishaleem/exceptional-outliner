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
        type: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

module.exports = wikiSchema;