const express = require('express')
const router = express.Router()
const productRouter = require('./products')
const categoryRouter = require('./category')
const transactionsRouter = require('./transactions')
const userRouter = require('./user')
const bagRouter = require('./mybag')

router
    .use('/products', productRouter)
    .use('/category', categoryRouter)
    .use('/transactions', transactionsRouter)
    .use('/user', userRouter)
    .use('/mybag', bagRouter)

module.exports = router
