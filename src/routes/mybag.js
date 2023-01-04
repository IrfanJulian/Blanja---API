const express = require('express')
const router = express.Router()
const bagController = require('../controllers/mybag')
// const { admin } = require('../middlewares/auth')
// const {hitCache} = require('../middlewares/redis')

router.get('/', bagController.getBag)
router.post('/', bagController.insertBag)
// router.put('/:id', categoryController.update)
// router.delete('/:id', categoryController.deleteData)

module.exports = router