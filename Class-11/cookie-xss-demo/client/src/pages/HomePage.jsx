import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // IIFEs
        (async () => {
            try {
                const res = await axios.get('http://localhost:1234/api/v1/products');
                setProducts(res.data);
            }
            catch (err) {
                console.log(err);
            }
        })()
    }, []);

    return <ProductList products={ products } />
}

export default HomePage
