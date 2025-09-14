import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // IIFEs
        (async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/products`);
                setProducts(res.data);
            }
            catch (err) {
                console.log(err?.response?.data?.message);
            }
        })()
    }, []);

    return <ProductList products={ products } />
}

export default HomePage
