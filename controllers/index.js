import path from 'path';
import fileDirName from '../utils/dirname.js';

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
        console.log(req.files);
        res.json({ downloadLinks: ['/image_1.png'] });
    } catch (e) {
        res.status(500).json({ error: "Server error" });
        console.log(e);
    }
}


export async function getDownloadFileById(req,res){
    try {
        //res.download()
        res.json({foo: "baar"});
    } catch (e) {
        res.status(500).json({ error: "Server error" });
        console.log(e);
    }
}