const mongose = require("mongoose")

const categorySchema = new mongose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        category_image:{
            type:String
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongose.model("Category",categorySchema)