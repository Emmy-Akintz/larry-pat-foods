const express = require('express')

// controller functions
const {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controller/productController')

const router = express.Router()

// get all products
router.get('/products', getProducts)

// get a single product
router.get('/products/:id', getProduct)

// post a new product
router.post('/products', createProduct)

// delete a product
router.delete('/products/:id', deleteProduct)

// update a product
router.patch('/products/:id', updateProduct)

module.exports = router