import Contact from "../db/models/Contact.js";

export const getContact = () => Contact.find();
export const getContactById = id => Contact.findById(id);
