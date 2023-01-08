const express = require('express')
const router = express.Router()
const checkoutController = require('../controllers/checkout')
const { protect } = require('../middlewares/auth')

router.get('/', protect, checkoutController.historyCheckout)
router.post('/', protect, checkoutController.postCheckout)

module.exports = router