import { readFile } from 'fs/promises';
import { join } from 'path';
import { __dirname } from './pathUtils.js';
import { checkFileExistence } from '../utils/fileUtils.js';

async function readFileContent() {
    try {
        const filePath = join(__dirname, 'files', 'fileToRead.txt');
        await checkFileExistence(filePath);
        const content = await readFile(filePath, 'utf8');
        console.log(content);
    } catch (error) {
        console.error(`Error in readFileContent: ${error.message}`);
    }
}

readFileContent();