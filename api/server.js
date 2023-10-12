import express from 'express'
import Author from "./authors.js"

const server = express();
server.use("/api" , Author)



export default server