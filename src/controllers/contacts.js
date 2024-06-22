import { getContact, getContactById, addContact, upsertContact, deleteContact } from "../services/contact-service.js";
import createHttpError from 'http-errors';

export const getAllContactsController = async (req, res) => {   
    const data = await getContact();
    
    res.json({
        status: 200,
        message: "Successfully found contacts!",
        data,
    });
};

export const getContactByIdController = async (req, res) => {
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

export const addContactController = async (req, res) => {
    const data = await addContact(req.body);
    
    res.status(201).json({
        status: 201,
        message: 'Successfully created a contact!',
        data,
    });
};

export const patchContactController = async (req, res) => {
    const { id } = req.params;
    const result = await upsertContact({ _id: id }, req.body);

    if (!result) {
        throw createHttpError(404, 'Contact not found');
    }

    res.json({
        status: 200,
        message: "Successfully patched a contact!",
        data: result.data,
    })
};

export const deleteContactController = async (req, res) => {
    const { id } = req.params;
    const result = await deleteContact({ _id: id });
    if (!result) {
        throw createHttpError(404, 'Contact not found');
    }
    res.json({
        status: 200,
        message: "Successfully deleted a contact!",
        data: result,
    })
}