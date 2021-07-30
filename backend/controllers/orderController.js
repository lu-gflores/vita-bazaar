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


// get order by id
// get /api/orders/:id
// private access
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
        .populate('user', 'name email')

    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// update order to paid
// get /api/orders/:id/pay
// private access
const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if (order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address
        }
        const updatedOrder = await order.save()
        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})


export { addOrderItems, getOrderById, updateOrderToPaid }
