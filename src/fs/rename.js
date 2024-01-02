import { rename } from 'fs/promises';
import { join } from 'path';
import { __dirname } from './pathUtils.js';
import { checkFileExistence, FILE_MUST_NOT_EXIST } from '../utils/fileUtils.js';

async function renameFile() {
    try {
        const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
        const newPath = join(__dirname, 'files', 'properFilename.md');

        await checkFileExistence(oldPath);
        await checkFileExistence(newPath, FILE_MUST_NOT_EXIST);
        await rename(oldPath, newPath);
    } catch (error) {
        console.error(`Error in renameFile: ${error.message}`);
    }
}

renameFile();