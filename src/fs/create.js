import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { getPath } from '../utils/utils.js';

const filePath = getPath(fileURLToPath(import.meta.url), 'files', 'fresh.txt');

const create = async () => {
  try {
    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    console.log('File created successfully');
  } catch (error) {
    console.error('FS operation failed');
  }
};

await create();