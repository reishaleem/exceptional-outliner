import { Schema } from "mongoose";
import pageSchema, { PageFields } from "./wiki.model";

export interface WorldFields {
    name: string;
    genres: string[];
    description: string;
    pages: PageFields[];
}

const worldSchema = new Schema(
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
        pages: [pageSchema],
    },
    {
        timestamps: true,
    }
);

export default worldSchema;
