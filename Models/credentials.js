const mongoose = require('mongoose')

const Data = mongoose.Schema({
    username :{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("credential",Data)