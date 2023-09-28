import multer from "multer";
import path from "path";
import fileDirName from "./utils/dirname.js";

const {__dirname} = fileDirName(import.meta);
const uploadDirPath = path.join(__dirname, 'uploads'); 
const uploads = multer({dest:uploadDirPath});

export const uploadsMiddleware = uploads.array('files');