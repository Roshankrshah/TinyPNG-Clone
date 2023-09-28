import path from 'path';
import fileDirName from '../utils/dirname.js';
import reduceFileSize from '../utils/reduceFileSize.js';
import deleteFile from '../utils/deleteFile.js';

const { __dirname } = fileDirName(import.meta);

export async function getHomePage(req, res) {
    try {
        const homeDir = path.join(__dirname, '..', 'public', 'home.html');
        res.sendFile(homeDir);
    } catch (e) {
        res.status(500).json({ error: "Server error" });
        console.log(e);
    }
}

export async function postResizeImages(req, res) {
    try {
        const files = req.files;

        const downloadLinks = [];

        for(const file of files){
            const outputFileDir = path.join(__dirname,'..','outputs',file.originalname);
            await reduceFileSize(file.path,outputFileDir);
            await deleteFile(file.path);

            downloadLinks.push(file.originalname);
        }

        res.json({ downloadLinks});
    } catch (e) {
        res.status(500).json({ error: "Server error" });
        console.log(e);
    }
}


export async function getDownloadFileById(req,res){
    try {
        const {fileId} = req.params;
        const filePath = path.join(__dirname, '..','outputs',fileId);
        res.download(filePath,(err)=>{
            if(err){
                console.log(err);
                res.status(401).json({error: "Something went wrong downloading file"});
            }
        });
    } catch (e) {
        res.status(500).json({ error: "Server error" });
        console.log(e);
    }
}