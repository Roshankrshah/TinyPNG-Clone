import express from "express";
import morgan from "morgan";
import multer from "multer";
import path from "path";
import fileDirName from "./utils/dirname.js";

const app = express();

const {__dirname} = fileDirName(import.meta);
const uploadDirPath = path.join(__dirname, 'uploads'); 
const uploads = multer({dest:uploadDirPath})

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('Stating TinyPNG project')
});

const port = 2611 || process.env.PORT;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});