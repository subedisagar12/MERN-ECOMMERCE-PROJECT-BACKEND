const express = require("express")
const productRoutes = express.Router()
const Product = require("../models/productModel")

//create
productRoutes.post("/create",async(req,res)=>{
    try{
        const prod = await Product.create({
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            discount_amount: req.body.discount_amount,
            is_featured: req.body.is_featured,
            is_active: req.body.is_active,
        })
        res.status(200).json({
            message: "product created sucessfully",
            data: prod
        })
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

//get All
productRoutes.get("/get",async(req,res)=>{
    try{
    let allProduct = await Product.find()

        if (!allProduct) {
            return res.status(500).json({
                error: "No product found"
            })
        }
        res.status(200).json({
            message:"All product fetched",
            data: allProduct
        })}
        catch (e) {
            res.status(500).json({
                message: e.message
            })
        }
})

//getSingle
productRoutes.get("/:id",async(req,res)=>{
    try{
        const productId = req.params.id
        const product = await Product.findById(productId)

        if (!product) {
            return res.status(404).json({
                error: "product not found"
            });
        }

        res.status(200).json({
            message:"Single product fetched",
            data:product
        })
    }catch(e){
        res.status(500).json({
            message: e.message
        })
    }
})

//update
productRoutes.patch("/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedData = req.body;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                error: "product not found"
            });
        }
        
        await Product.findByIdAndUpdate(productId, {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            discount_amount: req.body.discount_amount,
            is_featured: req.body.is_featured,
            is_active: req.body.is_active,
        });

        res.status(200).json({
            message: "product updated successfully",
            data: updatedData
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
});

//delete
productRoutes.delete("/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId)

        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            })
        }
        
        await Product.findByIdAndDelete(productId)

        res.status(200).json({
            message: "Product deleted successfully",
            data: product
        })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

module.exports = productRoutes