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
router.get('/', getProducts)

// get a single product
router.get('/:id', getProduct)

// post a new product
router.post('/', createProduct)

// delete a product
router.delete('/:id', deleteProduct)

// update a product
router.patch('/:id', updateProduct)

module.exports = router