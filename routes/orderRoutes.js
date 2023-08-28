const express = require("express");
const orderRoutes = express.Router();
const {
  CreateOrder,
  AllOrder,
  SingleOrder,
  UpdateOrder,
  DeleteOrder,
} = require("../controllers/OrderController");

orderRoutes.post("/create", CreateOrder);

orderRoutes.get("/all", AllOrder);

orderRoutes.get("/:orderId", SingleOrder);

orderRoutes.put("/:orderId/update", UpdateOrder);

orderRoutes.delete("/:orderId/delete", DeleteOrder);

module.exports = orderRoutes;
