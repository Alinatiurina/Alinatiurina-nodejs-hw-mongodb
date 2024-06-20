import express from 'express';
import { getAllContacts, getContactById } from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import isValid from '../middlewares/isValidId.js';

const contactRouter = express.Router();

contactRouter.get('/', ctrlWrapper(getAllContacts));
    
contactRouter.get("/:id", isValid, ctrlWrapper(getContactById));

export default contactRouter;