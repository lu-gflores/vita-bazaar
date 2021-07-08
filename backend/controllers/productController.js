import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// fetches all products
// get /api/products
// public access
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

//fetches a single product
// get /api/products/:id
// public access
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) res.json(product)
    else {
        res.status(404)
        throw new Error('Product not found')
    }
})

export { getProducts, getProductById }