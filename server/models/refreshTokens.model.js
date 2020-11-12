const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const refreshTokenSchema = new Schema(
    {
        token: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        }
    }
)

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);


module.exports = RefreshToken;