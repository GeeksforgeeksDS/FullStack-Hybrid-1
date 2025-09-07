import React from 'react';
import { useEffect } from 'react';
import { useParams} from 'react-router';
import axios from 'axios';

const ShowProduct = () => {
    
    const {productId} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:1234/api/v1/products/${productId}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
        })
    }, []);

  return (
    <div>
        <h1>Show Product Page</h1>
    </div>
  )
}

export default ShowProduct
