import express from 'express'
const router = express.Router()
import { getProducts, getProductById } from '../controllers/productController.js'

// fetches all products
// get /api/products
// public access
router.route('/').get(getProducts)

//fetches a single product
// get /api/products/:id
// public access
router.route('/:id').get(getProductById)

export default router