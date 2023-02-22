const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')
const { protect } = require('../middlewares/auth')
const upload = require('../middlewares/upload')

// const {hitCache, clearCache} = require('../middlewares/redis')
// const {stock} = require('../middlewares/middle')

router.get('/', productController.getData)
router.get('/:id', productController.getDetailData)
router.get('/myproduct/:id', productController.getMyProduct)
router.post('/', protect, upload.single('photo'), productController.insertProduct)
// router.post('/', upload.array([{ name: 'photo', maxCount: 4 }]), productController.insertProduct)
router.put('/:id', protect, upload.single('photo'), productController.update)
router.delete('/:id', protect, productController.delete)

module.exports = router
