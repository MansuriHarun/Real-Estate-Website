const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"]
    },
    email: {
        type: String,
        required: [true, "Please enter the email"]
    },
    message: {
        type: String,
        required: [true, "Please enter the message"]
    }
});

const contactModel = new mongoose.model("contactModel", contactSchema);

module.exports = contactModel;