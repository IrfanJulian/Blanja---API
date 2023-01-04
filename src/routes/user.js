const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
// const { protect } = require('../middlewares/auth')
const upload = require('../middlewares/upload')

router.get('/', userController.getData)
// router.get('/profile', protect, userController.getProfile)
router.get('/:id', userController.getProfile)
router.post('/register', userController.insertData)
router.post('/login', userController.login)
router.put('/:id', upload.single('photo'), userController.updateData)
router.delete('/:id', userController.deleteData)

module.exports = router