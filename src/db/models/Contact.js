import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    isFavourite: Boolean,
    contactType: {
        type: String,
        enum: ["work", "home", "personal"],
        default: 'personal',
    }
}, {versionKey: false, timestamps: true});

const Contact = model("Contact", contactSchema);

export default Contact;