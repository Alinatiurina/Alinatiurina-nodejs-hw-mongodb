import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    try {
        const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        return data.length;
    }
    catch (error) {
        console.error('Error')
    }
};

console.log(await countContacts());
