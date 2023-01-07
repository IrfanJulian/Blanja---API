const express = require('express')
const router = express.Router()
const transactionsController = require('../controllers/transactions')
// const { protect, user } = require('../middlewares/auth')

router.get('/', transactionsController.getData)
router.get('/myBag/:id', transactionsController.getMyBag)
router.post('/', transactionsController.insert)
// router.delete('/:id', transactionsController.delete)
// router.put('/:id', transactionsController.update)

module.exports = router