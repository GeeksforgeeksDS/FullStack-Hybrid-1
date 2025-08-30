import express from 'express';
import { v4 as uuid } from 'uuid';
import mongoose from 'mongoose';

// ======================================================== DATABASE CONFIGURATION =================


mongoose.connect('mongodb://127.0.0.1:27017/bazaar-db')
    .then(() => console.log('connection open'))
    .catch((err) => console.log(err));


const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: String
}, {versionKey: false, timestamps: true});


// Technically it is JS class
const Product = mongoose.model('Product', productSchema);




// ======================================================== REST ENDPOINTS =================

const app = express();

app.use(express.json());

// Get all groducts 
app.get('/products', async(req, res) => {
    const products = await Product.find({});
    res.json(products);
});


// Create a product
app.post('/products', async(req, res) => {
    const { title, description, image, price } = req.body;
    await Product.create({ title, description, image, price });
    res.json({ message: "Product created successfully" });
});


// Show a product
app.get('/products/:productId', async(req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.json(product);
})


// update a product
app.patch('/products/:productId', async(req, res) => {
    const { productId } = req.params;
    const { title, description, image, price } = req.body;
    await Product.findByIdAndUpdate(productId, {title, description, image, price})
    res.json({ message: 'Product Updated successfully' });
});


// delete a product
app.delete('/products/:productId', async(req, res) => {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.json({ message: 'Product delete successfully' });
})

app.listen(1234, () => {
    console.log('server running on port 1234');
});


