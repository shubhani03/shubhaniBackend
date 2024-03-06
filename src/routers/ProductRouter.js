const express = require("express");
const { createProduct } = require("../services/product.service");
const router = express.Router();
router.post("/createproduct", createProduct);
