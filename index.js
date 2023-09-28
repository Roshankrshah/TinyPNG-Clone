import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('Stating TinyPNG project')
});

const port = 2611 || process.env.PORT;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});