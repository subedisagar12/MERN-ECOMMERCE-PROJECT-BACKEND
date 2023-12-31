const express = require("express");
const orderRoutes = express.Router();
const {
  CreateOrder,
  AllOrder,
  SingleOrder,
  UpdateOrder,
  DeleteOrder,
} = require("../controllers/orderController");

orderRoutes.post("/create", CreateOrder);

orderRoutes.get("/all", AllOrder);

orderRoutes.get("/:orderId", SingleOrder);

orderRoutes.put("/:orderId", UpdateOrder);

orderRoutes.delete("/:orderId", DeleteOrder);

module.exports = orderRoutes;
