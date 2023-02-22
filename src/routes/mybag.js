const express = require('express')
const router = express.Router()
const bagController = require('../controllers/mybag')

router.get('/:id', bagController.getBag)
router.get('/detail/:id', bagController.getDetailBag)
router.post('/', bagController.insertBag)
// router.put('/:id', categoryController.update)
// router.delete('/:id', categoryController.deleteData)

module.exports = router