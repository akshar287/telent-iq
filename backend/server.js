
import express from "express"
import {ENV} from"./src/lib/env.js"


const app = express()
//console.log(process.env.PORT)

app.listen(ENV.PORT,()=>{
    console.log("server is running")
})