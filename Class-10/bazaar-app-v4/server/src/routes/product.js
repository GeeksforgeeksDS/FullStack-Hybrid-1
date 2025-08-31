import Product from '../models/Product.js';
import express from 'express';
import { getAllProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } from '../controllers/product.js';

const router = express.Router();

// Get all groducts 
router.get('/products', getAllProducts);

// Create a product
router.post('/products', createProduct);

// Show a product
router.get('/products/:productId', getSingleProduct)

// update a product
router.patch('/products/:productId', updateProduct);

// delete a product
router.delete('/products/:productId', deleteProduct);

export default router;