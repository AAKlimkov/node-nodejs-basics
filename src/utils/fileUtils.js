import { access, mkdir, readdir, copyFile } from 'fs/promises';
import { join } from 'path';

export const FILE_MUST_EXIST = 'FILE_MUST_EXIST';
export const FILE_MUST_NOT_EXIST = 'FILE_MUST_NOT_EXIST';

export async function checkFileExistence(filePath, mode = FILE_MUST_EXIST) {
    try {
        await access(filePath);
        if (mode === FILE_MUST_NOT_EXIST) {
            throw new Error(`File already exists: ${filePath}`);
        }
    } catch (error) {
        if (mode === FILE_MUST_NOT_EXIST && error.code !== 'ENOENT') {
            throw error; 
        } else if (mode === FILE_MUST_EXIST && error.code === 'ENOENT') {
            throw new Error(`File does not exist: ${filePath}`);
        }
    }
}

export async function copyDir(src, dest) {
    await mkdir(dest, { recursive: true });
    let entries = await readdir(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = join(src, entry.name);
        let destPath = join(dest, entry.name);

        if (entry.isDirectory()) {
            await copyDir(srcPath, destPath);
        } else {
            await copyFile(srcPath, destPath);
        }
    }
}
