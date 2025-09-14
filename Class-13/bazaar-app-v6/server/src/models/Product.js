import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
}, { versionKey: false, timestamps: true });


// Technically it is JS class
const Product = mongoose.model('Product', productSchema);

export default Product;