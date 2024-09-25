const { fetchAllProducts, addProduct, fetchProductById, filterProducts } = require('../controllers/productController')

const router = require('express').Router()

router
    .route('/')
    .get(fetchAllProducts)
    .post(addProduct)

router.route('/:id').get(fetchProductById)

router.route("/filtered-products").post(filterProducts);

module.exports = router