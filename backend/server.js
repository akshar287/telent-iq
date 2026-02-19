
import express from "express"
import {ENV} from"./src/lib/env.js"
import path from "path"


const app = express()
//console.log(process.env.PORT)
const __dirname = path.resolve()

// deployement
if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}
app.listen(ENV.PORT,()=>{
    console.log("server is running")
})