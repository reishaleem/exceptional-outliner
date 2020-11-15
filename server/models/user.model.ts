import mongoose, { Schema, model } from "mongoose";

import worldSchema, { WorldFields } from "./world.model";

interface UserFields extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    penName: string;
    bio: string;
    worlds: WorldFields[];
}

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
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
        penName: {
            type: String,
            trim: true,
            minlength: 4,
            maxlength: 50,
            unique: true,
        },
        bio: {
            type: String,
            trim: true,
            maxlength: 255,
        },
        worlds: [worldSchema],
    },
    {
        timestamps: true,
    }
);

const User = model<UserFields>("User", userSchema);

export default User;
