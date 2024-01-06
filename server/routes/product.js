const express = require('express')
const requireAuth = require('../middleware/requireAuth')

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
router.post('/', requireAuth, createProduct)

// delete a product
router.delete('/:id', requireAuth, deleteProduct)

// update a product
router.patch('/:id', requireAuth, updateProduct)

module.exports = router