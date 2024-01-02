import { readdir } from 'fs/promises';
import { join } from 'path';
import { __dirname } from './pathUtils.js';
import { checkFileExistence } from '../utils/fileUtils.js';

async function listFiles() {
    try {
        const dirPath = join(__dirname, 'files');
        await checkFileExistence(dirPath);
        const files = await readdir(dirPath);
        console.log(files);
    } catch (error) {
        console.error(`Error in listFiles: ${error.message}`);
    }
}

listFiles();