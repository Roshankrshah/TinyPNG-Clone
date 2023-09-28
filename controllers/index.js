import path from 'path';
import fileDirName from '../utils/dirname.js';

const {__dirname } = fileDirName(import.meta);

export async function getHomePage(req,res){
    const homeDir = path.join(__dirname,'..','public','home.html');
    res.sendFile(homeDir);
}