import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 3000 ;

import http, { createServer } from 'http';
import app from './app.js';


const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
    
})