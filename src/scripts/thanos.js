import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    try {
        const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        const filterData = data.filter(() => Math.random() > 0.5);
        await fs.writeFile(PATH_DB, JSON.stringify(filterData));
    }
    catch (error) {
        console.error('Error')
    }
};

await thanos();
