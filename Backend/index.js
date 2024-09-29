import express from 'express';
import cors from "cors"
import {connectToMongoDb} from "./connect.js";
import cookieParser from 'cookie-parser';



import urlRoute from "./routes/url.js";
import userRoute from "./routes/user.js";

connectToMongoDb("mongodb://127.0.0.1:27017/short-url")
.then(()=>{console.log("mongodb connected")})
.catch((err)=>{console.log("error=",err)});

const app = express()
const port = 3000

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // Allow credentials (cookies)
}));

app.use(express.json());
app.use(cookieParser());

app.use('/url',urlRoute);
app.use('/user',userRoute)



/* { status: 'ok', method: 'GET' } */
app.listen(port, () => console.log(`Example app listening on port ${port}`))

