const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the title"]
    },
    description: {
        type: String,
        required: [true, "Please enter the description"]
    },
    image: {
        type: String,
        required: [true, "Please enter the image"]
    },
    contact: {
        type: Number,
        required: [true, "Please enter the contact"]
    },
    reviews: [
        {
            user: {
                type: String
            },
            rating: {
                type: Number
            },
            comment: {
                type: String
            }
        }
    ]
});

const propertyModel = new mongoose.model("propertyModel", propertySchema);

module.exports = propertyModel;