const Product = require('../models/productModel')
const mongoose = require('mongoose')

// get all products
const getProducts = async (req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 })

    res.status(200).json(products)
}

// get a single product
const getProduct = async (req, res) => {
    const { productId } = req.params

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(404).json({ error: 'No such product' })
    }

    const product = await Product.findById(productId)

    if (!product) {
        return res.status(404).json({ error: 'No such product' })
    }

    res.status(200).json(product)
}

// create a new product
const createProduct = async (req, res) => {
    const { name, description, price, stockQuantity } = req.body

    let emptyFields = []

    if (!name) {
        emptyFields.push('name')
    }
    if (!description) {
        emptyFields.push('description')
    }
    if (!price) {
        emptyFields.push('price')
    }
    if (!stockQuantity) {
        emptyFields.push('stockQuantity')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    // add document to db
    let product = new Product({
        name, description, price: mongoose.Types.Decimal128.fromString(price), stockQuantity
    })

    product.save()
        .then(doc => res.status(200).json({ message: 'Product added successfully', doc }))
        .catch(error => res.json({ message: error.message }))
}

// delete a product
const deleteProduct = async (req, res) => {
    const { productId } = req.params

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(404).json({ error: 'No such product' })
    }

    const product = await Product.findOneAndDelete({ _id: productId })

    if (!product) {
        return res.status(400).json({ error: 'No such product' })
    }

    res.status(200).json({ product })
}

// update a product
const updateProduct = async (req, res) => {
    const { productId } = req.params

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(404).json({ error: 'No such product' })
    }

    const product = await Product.findOneAndUpdate({ _id: productId }, {
        ...req.body
    })

    if (!product) {
        return res.status(400).json({ error: 'No such product' })
    }

    return res.status(200).json(product)
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}