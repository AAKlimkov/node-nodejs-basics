import { join } from 'path';
import { __dirname } from './pathUtils.js';
import { checkFileExistence, FILE_MUST_NOT_EXIST, copyDir } from '../utils/fileUtils.js';

async function copyFiles() {
    try {
        const srcDir = join(__dirname, 'files');
        const destDir = join(__dirname, 'files_copy');

        await checkFileExistence(srcDir);
        await checkFileExistence(destDir, FILE_MUST_NOT_EXIST);
        await copyDir(srcDir, destDir);
    } catch (error) {
        console.error(`Error in copyFiles: ${error.message}`);
    }
}

copyFiles();