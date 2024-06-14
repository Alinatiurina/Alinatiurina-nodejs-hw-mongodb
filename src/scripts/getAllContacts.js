import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    try {
        let data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = JSON.parse(data);
        return contacts;
    }
    catch (error) {
        console.error('Error')
    }
};

console.log(await getAllContacts());