const express = require("express");

const { getCategory, getList, getProduct } = require("../controllers/product");

const router = express.Router();

router.get("/", getCategory);

router.get("/list", getList);

router.get("/product", getProduct);

module.exports = router;
