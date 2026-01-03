const express=require('express');
const app=express();
const FirstRoute=require('./Routes/firstRoute');
app.use('/',FirstRoute);
// app.get("/get-data",(req,res)=>{
//     res.send("Hello from backend  Application responding!.....");
// });
app.listen(9000,()=>console.log('Server running on port 9000'));