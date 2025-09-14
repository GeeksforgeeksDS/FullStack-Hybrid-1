import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    review: {
        type: String,
        maxLength: 256,
        trim: true
    }
}, {versionKey: false, timestamps: true});

const Review = mongoose.model('Review', reviewSchema);

export default Review;