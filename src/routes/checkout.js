const express = require('express')
const router = express.Router()
const checkoutController = require('../controllers/checkout')

router.get('/myorder/:id', checkoutController.historyCheckout)
router.post('/postcheckout', checkoutController.addCheckout)

module.exports = router