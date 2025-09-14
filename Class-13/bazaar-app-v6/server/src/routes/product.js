import express from 'express';
import { getAllProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } from '../controllers/product.js';
import { isLoggedIn } from '../middleware/auth.js';
import Product from '../models/Product.js';
import Review from '../models/Review.js';

const router = express.Router();

// Get all groducts 
router.get('/', getAllProducts);

// Create a product
router.post('/', createProduct);

// Show a product
router.get('/:productId', isLoggedIn, getSingleProduct);

// update a product
router.patch('/:productId', updateProduct);

// delete a product
router.delete('/:productId', deleteProduct);

router.post('/:productId/reviews', async(req, res) => {
    const { review, rating } = req.body;
    const { productId } = req.params;

    const product = await Product.findById(productId);

    if (!product) {
        throw new NotFoundError('ProductId is invalid');
    }

    // creating a review on nodejs side
    const newReview = new Review({ rating, review });

    // Add a review id to the product.
    product.reviews.push(newReview._id);

    // saving it in the db i.e reviews.
    await newReview.save();
    await product.save();
    res.status(201).json({ message: 'Review created successfully' });
})

export default router;