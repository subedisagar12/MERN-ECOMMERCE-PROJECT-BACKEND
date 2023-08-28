const mongoose = require("mongoose")

const bannerSchema = new mongoose.Schema(
    {
        image:{
            type:String,
            required:true
        },
        is_featured:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Banner",bannerSchema)