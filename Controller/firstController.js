// const express=require('express');
// // const TestingAPI=(req,res)=>{
// //     console.log("API is called");
// // }
// // exports.TestingAPI=TestingAPI;

// const GetData=(req,res)=>{
//     return res.json("Responding from Backend!....");
// }
// exports.GetData=GetData;

const express = require('express')
const UserInfo = require('../Models/UserInfo')
const Bcrypt=require('bcrypt')
const Cron = require('node-cron')
const AddData = async(req,res) =>{
    try{
        console.log(req.body)
        const {name , mobile , age, email} = req.body
        // validations
        if( !email || !mobile || !age || !name){
            return res.status(400).json("All fields are required")
        }

        const result = await UserInfo.create(req.body)
        return res.status(201).json("Records Inserted")
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

const GetData = async(req,res) =>{
    try{
        const result = await UserInfo.find()
        return res.status(200).json(result);
    }
    catch(err){
        return res.status(500).json(err)
    }
}

const UpdateData = async(req,res) =>{
    try{
        // validations
        const result = await  UserInfo.findByIdAndUpdate(req.params.id,req.body)
        return res.status(200).json("record updated")
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}
const DeleteData = async(req,res)=>{
    try{
        if(!req.params.id){
            return res.status(400).json("Id Required")
        }
        const Result= await UserInfo.findByIdAndDelete(req.params.id)
        return res.status(200).json("Record deleted")
    }
    catch(err){
        return res.status(500).json(err)
    }
}

const UploadFile = async(req,res) => {
    try{
        console.log(req.files)
        return res.status(200).json(req.files)
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}
exports.UploadFile = UploadFile


const Encryption=async(req,res)=>{
    try{
        const encode=await bcrypt.hash(req.body.password,10)
        return res.status(200).json(encode)
    }
    catch(err){
        return res.status(500).json(err)
    }
}
exports.Encryption=Encryption

const VerifyEncryption=async(req,res)=>{
    try{
        const encrypted="$2b$10$s7pH.3.UUFTCLJAPB87x9udU2lJj6BX5vGiqqmQBfKdcEw/FflzQa"
        const result=await Bcrypt.compare(req.body.password,encrypted)
        return res.status(200).json(result)
    }
    catch(err){
        return res.status(500).json(err)
    }
}
exports.VerifyEncryption=VerifyEncryption

Cron.schedule("* * * * * * ",()=>{
    console.log("Cron Job executed")
})

exports.AddData = AddData
exports.GetData = GetData
exports.UpdateData = UpdateData
exports.DeleteData = DeleteData
