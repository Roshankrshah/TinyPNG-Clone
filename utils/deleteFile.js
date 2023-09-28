import { unlink } from 'fs/promises';

export default function deleteFile(filePath){
    return unlink(filePath);
}