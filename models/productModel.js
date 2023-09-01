const mongoose = require("mongoose")

const productScheme = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        discount_amount:{
            type:Number,
            default:0
        },
        is_featured:{
            type:Boolean,
            default:false
        },
        is_active:{
            type:Boolean,
            default:true
        },
        stock_quantity:{
            type:Number,
            default:true
        },
        category_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            as:"User",
        }
    },
    {timestamps:true}
)

module.exports = mongoose.model("Product", productScheme)