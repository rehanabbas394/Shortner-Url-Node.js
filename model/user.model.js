const mongoose = require("mongoose")
const { Mongodb } = require("../connection")
const { timeStamp } = require("console")
const { type } = require("os")


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{ 
        type: String,
        enum: ['ADMIN', 'NORMAL',],
        default: 'NORMAL' 
    },
    gender:{
        type:String,
        required:true  
    }
},{timeStamp:true})

const User = mongoose.model("users",UserSchema)

module.exports = User