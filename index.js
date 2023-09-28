import express from "express";
import morgan from "morgan";
import path from "path";
import fileDirName from "./utils/dirname.js";

const app = express();

const {__dirname } = fileDirName(import.meta);
const publicDirPath = path.join(__dirname,'public');

app.use(express.static(publicDirPath));

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    const homeDir = path.join(__dirname,'public','home.html');
    res.sendFile(homeDir);
});

const port = 2611 || process.env.PORT;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});