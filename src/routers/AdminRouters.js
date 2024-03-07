const express = require("express");

// const { getAllOrder } = require("../src/config/controller");
const {
  AdminLogin,
  AdminRegister,
  authController,
} = require("../controller/authController.js");
const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../services/product.service.js");
const authMiddleWare = require("../middleware/authmidleware.js");
const {
  createOrder,
  getAllOrderOfCustomer,
  getAllOrders,
} = require("../services/order.service.js");

const router = express.Router();
router.post("/login", AdminLogin);
router.post("/register", AdminRegister);
router.post("/createproduct", createProduct);
router.put("/updateoneproduct/:id", updateProduct);
router.put("/deleteProduct/:id", deleteProduct);
router.get("/getallproduct", getAllProduct);
router.post("/getUserData", authMiddleWare, authController);
router.post("/createorders", createOrder);
router.get("/getallcustomerorder", getAllOrderOfCustomer);
router.get("/getallorders", getAllOrders);

module.exports = router;
