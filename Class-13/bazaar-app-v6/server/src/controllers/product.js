import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}

export const createProduct = async (req, res) => {
    const { title, description, image, price } = req.body;
    await Product.create({ title, description, image, price });
    res.json({ message: "Product created successfully" });
}

export const getSingleProduct = async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId).populate('reviews');
    res.json(product);
}

export const updateProduct = async (req, res) => {
    const { productId } = req.params;
    const { title, description, image, price } = req.body;
    await Product.findByIdAndUpdate(productId, { title, description, image, price })
    res.json({ message: 'Product Updated successfully' });
}

export const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.json({ message: 'Product delete successfully' });
}