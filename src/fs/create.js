import { writeFile } from 'fs/promises';
import { join } from 'path';
import { __dirname } from './pathUtils.js';
import { checkFileExistence, FILE_MUST_NOT_EXIST } from '../utils/fileUtils.js';

async function createFile() {
    try {
        const filePath = join(__dirname, 'files', 'fresh.txt');
        await checkFileExistence(filePath, FILE_MUST_NOT_EXIST);
        await writeFile(filePath, 'I am fresh and young');
    } catch (error) {
        console.error(`Error in createFile: ${error.message}`);
    }
}

createFile();