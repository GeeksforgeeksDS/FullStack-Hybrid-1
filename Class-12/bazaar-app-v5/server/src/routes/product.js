import express from 'express';
import { getAllProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } from '../controllers/product.js';
import { isLoggedIn } from '../middleware/auth.js';

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

export default router;