import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Product from '../components/Product';
import { useState } from 'react';
import axios from 'axios';

const ShowProduct = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        (async() => {
            try {
                const res = await axios.get(`http://localhost:1234/api/v1/products/${productId}`, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('token')}`
                    }
                })
                setProduct(res.data)
            }
            catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <div>
            {!product && <p>Loading.....</p>}
            {product && <Product title={product.title} image={product.image} price={product.price} description={product.description} />}
            <h1>Add a Review</h1>
        </div>
    )
}

export default ShowProduct
