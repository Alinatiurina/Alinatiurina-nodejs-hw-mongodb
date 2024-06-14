import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
    try {
        const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        for (let i = 0; i < number; i++) {
            data.push(createFakeContact());
        }
        await fs.writeFile(PATH_DB, JSON.stringify(data));
    }
    catch (error) {
        console.error('Error')
    }
};

await generateContacts(7);
