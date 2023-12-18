import { dirname } from 'path';
import { access } from 'fs/promises'
import path from 'path';



export function getPath(url, ...args) {
  const __dirname = dirname(url);
  return path.join(__dirname, ...args);
}

export const isFileExists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};
