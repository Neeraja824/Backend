// const express=require('express');
// const app=express();
// const FirstRoute=require('./Routes/firstRoute');
// app.use('/',FirstRoute);
// app.get("/get-data",(req,res)=>{
//     res.send("Hello from backend  Application responding!.....");
// });
// app.listen(9000,()=>console.log('Server running on port 9000'));

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
let students = [];
let id = 1;
app.post("/students", (req, res) => {
  const student = {
    id: id++,
    name: req.body.name,
    roll: req.body.roll,
    phone: req.body.phone,
    address: req.body.address
  };

  students.push(student);
  res.json(student);
});
app.get("/students", (req, res) => {
  res.json(students);
});
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student);
});
app.put("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);

  students[index] = {
    id: students[index].id,
    ...req.body
  };

  res.json(students[index]);
});
app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.json({ message: "Student deleted" });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
