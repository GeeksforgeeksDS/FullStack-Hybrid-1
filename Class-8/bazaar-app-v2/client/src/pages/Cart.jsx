import React,{useContext} from 'react';
import UserContex from '../store/user-context';

const Cart = () => {

    const { cart } = useContext(UserContex); 
    // The items which are there in the cart they should be available in this component
    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {
                    cart.map((item, idx) => {
                        return <li key={ idx }>{ item }</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Cart
