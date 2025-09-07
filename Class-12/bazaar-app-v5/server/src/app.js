import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.js';
import authRoutes from './routes/auth.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ["GET", "POST", "PATCH", "DELETE"]
}));
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/auth", authRoutes);

// global exception error handling middleware
app.use((err, req, res, next) => {
    const { message = 'Something went wrong', status = 500 } = err;
    res.status(status).json({ message });
});

export default app;
