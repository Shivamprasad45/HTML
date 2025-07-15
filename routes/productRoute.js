const express = require('express');
// const path = require('path');
const router = express.Router();

const { getAllProducts } = require('../controllers/productController.js');

router.get('/', getAllProducts);

module.exports = router;
