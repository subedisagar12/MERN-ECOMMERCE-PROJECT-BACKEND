const express = require("express")
const bannerRoutes = express.Router()
const Banner = require("../models/bannerModel")

//create
bannerRoutes.post("/create",async(req,res)=>{
    try{
        const banner = await Banner.create({
            image:req.body.image,
            is_featured:req.body.is_featured,
            title:req.body.title
        })
        res.status(200).json({
            message:"banner created successfully",
            data:banner
        })
    }catch(e){
        res.status(500).json({
            message:e.message
        })
    }
})

//getall banners
bannerRoutes.get("/all", async(req,res)=>{
    try{
        let allBanners = await Banner.find()
        if(!allBanners){
            res.status(500).json({
                error: "no cateoiry found"
            })
        }
        res.status(200).json({
            message:"All category fethed",
            data: allBanners
        })
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
})

//get single banner
bannerRoutes.get("/:id", async(req,res)=>{
    try{
        const bannerId = req.params.id
        const banner = await Banner.findById(bannerId)
        if(!bannerId){
            res.status(500).json({
                error:"banner not found"
            })
        }
        res.status(500).json({
            message:"product fetched",
            data:banner
        })
    }catch(e){
        error:e.message
    }
})

//updatebanner
bannerRoutes.patch("/:id", async(req,res)=>{
    try{
        const bannerId = req.params.id
        const updatedBanner = req.body
        const banner = await Banner.findById(bannerId)
        
        if(!banner){
            res.status(500).json({
                error:"product not found",
            })
        }
        await Banner.findByIdAndUpdate(bannerId,{
            image:req.body.image,
            is_featured:req.body.is_featured,
            title:req.body.title
        })
        res.status(200).json({
            message:"product updated",
            data:updatedBanner
        })
    }catch(e){
        res.status(500).json({
            error:e.message
        })
    }
})

//deleBanner
bannerRoutes.delete("/:id",async(req,res)=>{
    try{
        const bannerId = req.body.id
        const banner = await Banner.findById(bannerId)
        if(!banner){
            res.status(500).json({
                message:"Banner not found"
            })
        }
        await Banner.findByIdAndDelete(bannerId)
            res.status(200).json({
                message:"banner deleted successfully",
                data: banner
    }) 
    }catch(e){
        res.status(500).json({
            error:e.message
        })
    }
})

module.exports = bannerRoutes;