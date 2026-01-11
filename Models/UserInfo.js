const mongoose =require('mongoose')

const UserInfo = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("users",UserInfo);