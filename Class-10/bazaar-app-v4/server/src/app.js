import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ["GET", "POST", "PATCH", "DELETE"]
}));
app.use("/api/v1", productRoutes);

export default app;
