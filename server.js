import'dotenv/config';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import bodyParser from 'body-parser';
import cors from 'cors'
import models from './models';
import routes from './routes';



const app = express();
app.use(cors());


app.use((req, resp, next)=>{
    req.context = {models};
    next();
})
app.use((req, resp, next)=>{
    req.serverMesage = 'server generated message'
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/users', routes.user);
app.use('/message', routes.message);
app.use('/quotes', routes.quotes);






app.listen(3000,()=>{
    console.log(process.env.ENVIRONMENT);
    console.log("Example app listening on port 3000!");
});