import { fileURLToPath } from 'url';
import fs from 'fs/promises'
import { getPath,  } from '../utils/utils.js';

const sourcePath = getPath(fileURLToPath(import.meta.url), 'files');


const copy = async () => {
  try {
      const sourceStats = await fs.stat(sourcePath);
      if (!sourceStats.isDirectory()) {
        throw new Error('Source is not a directory');
      }
  }
  catch (error) {
      throw new Error(`FS operation failed: ${error.message}`);
    }
};

await copy();
