import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        let data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        data = [];
        await fs.writeFile(PATH_DB, JSON.stringify(data));
    }
    catch (error) {
        console.error('Error')
    }
};

await removeAllContacts();
