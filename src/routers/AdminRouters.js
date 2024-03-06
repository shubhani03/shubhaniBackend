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
} = require("../services/product.service.js");
const authMiddleWare = require("../middleware/authmidleware.js");
const {
  createOrder,
  getAllOrderOfCustomer,
  getAllOrders,
} = require("../services/order.service.js");

// const authMiddleWare = require("../middlewares/authMiddleWare");

const router = express.Router();
router.post("/login", AdminLogin);
router.post("/register", AdminRegister);
router.post("/createproduct", createProduct);
router.put("/updateoneproduct/:id", updateProduct);
router.get("/getallproduct", getAllProduct);
router.post("/getUserData", authMiddleWare, authController);
router.post("/createorders", createOrder);
router.get("/getallcustomerorder", getAllOrderOfCustomer);
router.get("/getallorders", getAllOrders);

// router.post("/getUserData", authMiddleWare, authController);
// router.post("/applyDoctor", authMiddleWare, applyDoctorController);
// router.post("/getAllNotification", authMiddleWare, getAllNotificationConroller);
// router.post(
//   "/deleteAllNotification",
//   authMiddleWare,
//   deleteAllNotificationConroller
// );

// router.get("/getAllDoctor", authMiddleWare, getAllDoctor);
// router.post("/book-appointments", authMiddleWare, bookAppointmentController);
module.exports = router;
