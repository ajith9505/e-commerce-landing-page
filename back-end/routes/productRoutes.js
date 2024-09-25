const { fetchAllProducts, fetchProductById } = require('../controllers/productController')

const router = require('express').Router()

router.route('/').get(fetchAllProducts)
router.route('/:id').get(fetchProductById)

module.exports = router