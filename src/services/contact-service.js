import Contact from "../db/models/Contact.js";
import calcPaginationData from "../utils/calcPaginationData.js";
import { sortOrderList } from "../constants/index.js";
import { contactFieldList } from '../constants/contacts-constants.js';

export const getContact = async ({ page, perPage, sortBy = contactFieldList[0], sortOrder = sortOrderList[0] }) => {
    const skip = (page - 1) * perPage;

    const items = await Contact.find().skip(skip).limit(perPage).sort({[sortBy]: sortOrder});
    const totalItems = await Contact.countDocuments();
    const { totalPages, hasNextPage, hasPrevPage } = calcPaginationData({ total: totalItems, perPage, page });

    return {
        items,
        totalItems,
        page,
        perPage,
        totalPages,
        hasNextPage,
        hasPrevPage,
    };
};

export const getContactById = id => Contact.findById(id);

export const addContact = data => Contact.create(data);

export const upsertContact = async (filter, data, options = {}) => {
    const result = await Contact.findOneAndUpdate(filter, data, {
        new: true,
        upsert: true,
        includeResultMetadata: true,
        ...options,
    });

    if (!result) return null;
    const isNew = result.upserted ? true : false;

    return {
        data: result,
        isNew,
    };
};

export const deleteContact = filter => Contact.findOneAndDelete(filter);
