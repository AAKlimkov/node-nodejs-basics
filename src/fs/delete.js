import { rm } from 'fs/promises';
import { join } from 'path';
import { __dirname } from './pathUtils.js';
import { checkFileExistence } from '../utils/fileUtils.js';

async function deleteFile() {
  try {
    const filePath = join(__dirname, 'files', 'fileToRemove.txt');
    await checkFileExistence(filePath);
    await rm(filePath);
  } catch (error) {
    console.error(`Error in deleteFile: ${error.message}`);
  }
}

deleteFile();