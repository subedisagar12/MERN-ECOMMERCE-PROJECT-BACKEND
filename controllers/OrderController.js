const jwt = require("jsonwebtoken");
const Order = require("../models/orderModel");

const CreateOrder = async (req, res, next) => {
  try {
    let newOrder = await Order.create({
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      order_number: req.body.order_number,
      ordered_products: req.body.products,
    });
    res.json({ message: "Order created", data: newOrder });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

//Get all Order
const AllOrder = async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.json({ message: "All orders fetched", data: allOrders });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const SingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (order) {
      res.json({ message: "Order fetched", data: order });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const UpdateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.orderId,
      req.body,
      { new: true }
    );
    if (updatedOrder) {
      res.json({ message: "Order updated", data: updatedOrder });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const DeleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.orderId);
    if (deletedOrder) {
      res.json({ message: "Order deleted", data: deletedOrder });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  CreateOrder,
  AllOrder,
  SingleOrder,
  UpdateOrder,
  DeleteOrder,
};
