import { getContact, getContactById } from "../services/contact-service.js";
import createHttpError from 'http-errors';

export const getAllContacts = async (req, res) => {   
    const data = await getContact();
    
    res.json({
        status: 200,
        message: "Successfully found contacts!",
        data,
    });
};

export const getContactById = async (req, res) => {
    const { id } = req.params;
    const data = await getContactById(id);

    if (!data) {
        throw createHttpError(404, `Contact with id ${id} not found`);
    }
    res.json({
        status: 200,
        message: `Successfully found contact id=${id}!`,
        data,
    });
};