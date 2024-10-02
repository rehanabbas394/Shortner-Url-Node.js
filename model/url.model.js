const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true
    },
    visitHistort: [{timeStamp:{type:Number}}],
    createdby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },

},{timestamps:true})

const model = mongoose.model("url", UrlSchema)

module.exports = model
