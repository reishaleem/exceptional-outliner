import mongoose, { Schema } from "mongoose";

export interface PageFields {
    name: string;
    body: string;
    type: string;
}

const pageSchema = new Schema(
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
        },
    },
    {
        timestamps: true,
    }
);

export default pageSchema;
