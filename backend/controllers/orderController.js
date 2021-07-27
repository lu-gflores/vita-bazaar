import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// create new order
// post /api/orders
// private access
const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod,
        temsPrice, taxPrice, shippingPrice,
        totalPrice, } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No Order items')
        return
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            temsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })


        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})

export { addOrderItems }
