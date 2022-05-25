import mongoose from "mongoose"

const sampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, { collection: "Dogs" });

export default mongoose.model("Dogs", sampleSchema);