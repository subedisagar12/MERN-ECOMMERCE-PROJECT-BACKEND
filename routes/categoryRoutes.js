const express = require("express");
const categoryRoutes = express.Router();
const Category = require("../models/categoryModel");

//create
categoryRoutes.post("/create", async (req, res) => {
  try {
    const feature = await Category.create({
      title: req.body.title,
      category_image: req.body.image,
    });
    res.status(200).json({
      message: "product created successfully",
      data: feature,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

//getAll
categoryRoutes.get("/all", async (req, res) => {
  try {
    let allCategory = await Category.find();

    if (!allCategory) {
      return res.status(500).json({
        error: "No category found",
      });
    }
    res.status(200).json({
      message: "All category fetched",
      data: allCategory,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
});

//getSingle
categoryRoutes.get("/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({
        error: "Category not found",
      });
    }

    res.status(200).json({
      message: "Single category fetched",
      data: category,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
});

//update
categoryRoutes.patch("/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updatedData = req.body;

    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({
        error: "Category not found",
      });
    }

    await Category.findByIdAndUpdate(categoryId, {
      title: req.body.title,
      category_image: req.body.image,
    });

    res.status(200).json({
      message: "Category updated successfully",
      data: updatedData,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
});

//delete
categoryRoutes.delete("/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({
        error: "Category not found",
      });
    }

    await Category.findByIdAndDelete(categoryId);

    res.status(200).json({
      message: "Category deleted successfully",
      data: category,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
});

module.exports = categoryRoutes;
