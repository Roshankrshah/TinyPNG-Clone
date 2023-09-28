import express from "express";
import morgan from "morgan";
import path from "path";
import fileDirName from "./utils/dirname.js";
import router from "./routes/index.js";

const app = express();

const {__dirname } = fileDirName(import.meta);
const publicDirPath = path.join(__dirname,'public');

app.use(express.static(publicDirPath));

app.use(morgan('dev'));

app.use('/',router);

const port = 2611 || process.env.PORT;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});