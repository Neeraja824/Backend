const express=require('express');
// const TestingAPI=(req,res)=>{
//     console.log("API is called");
// }
// exports.TestingAPI=TestingAPI;

const GetData=(req,res)=>{
    return res.json("Responding from Backend!....");
}
exports.GetData=GetData;