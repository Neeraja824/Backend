// const express=require('express');
// const app=express();
// const FirstRoute=require('./Routes/firstRoute');
// app.use('/',FirstRoute);
// app.get("/get-data",(req,res)=>{
//     res.send("Hello from backend  Application responding!.....");
// });
// app.listen(9000,()=>console.log('Server running on port 9000'));

const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const FirstRoute = require("./Routes/firstRoute")
app.use(cors())
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/")
.then(res =>{
    console.log("DB is Connected")
})
.catch(err =>{
    console.log("error in connecting DB",err)
})

app.use("/",FirstRoute);

app.listen(9000,()=>{
    console.log("Server Started at 9000")
})