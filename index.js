import express from 'express';

import urlRoute from "./routes/url.js";
import {connectToMongoDb} from "./connect.js";
import URL from './models/url.js';

connectToMongoDb("mongodb://127.0.0.1:27017/short-url")
.then(()=>{console.log("mongodb connected")})
.catch((err)=>{console.log("error=",err)});

const app = express()
const port = 3000

app.use(express.json());


app.use('/',urlRoute);


/* { status: 'ok', method: 'GET' } */
app.listen(port, () => console.log(`Example app listening on port ${port}`))

