import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    space: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});

export default mongoose.model("apartmentModel", apartmentSchema)