import express from 'express';
import { getAllContactsController, getContactByIdController, addContactController, patchContactController, deleteContactController } from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import isValid from '../middlewares/isValidId.js';

const contactRouter = express.Router();

contactRouter.get('/', ctrlWrapper(getAllContactsController));
    
contactRouter.get("/:id", isValid, ctrlWrapper(getContactByIdController));

contactRouter.post("/", ctrlWrapper(addContactController));

contactRouter.patch("/:id", isValid, ctrlWrapper(patchContactController));

contactRouter.delete("/:id", isValid, ctrlWrapper(deleteContactController));

export default contactRouter;