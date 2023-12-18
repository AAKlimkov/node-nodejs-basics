import { rename as fsRename } from 'fs/promises'
import { fileURLToPath } from 'url';
import { getPath, isFileExists } from '../utils/utils.js';
const sourcePath = getPath(fileURLToPath(import.meta.url), 'files', 'wrongFilename.txt');
const destPath = getPath(fileURLToPath(import.meta.url), 'files', 'properFilename.md');
const errorMessage = 'FS operation failed'

const rename = async () => {
  const isSourceFileExist = await isFileExists(sourcePath)
  const isDestFileExist = await isFileExists(destPath)
  if (isSourceFileExist & !isDestFileExist) {
    await fsRename(sourcePath, destPath);
  } else {
    throw new Error(errorMessage);
  }
}
await rename()