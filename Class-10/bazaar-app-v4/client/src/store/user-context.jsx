import React, { createContext } from 'react';

const UserContex = createContext({
    cart: [],
    cartLength: 0
});

export const UserContextProvider = (props) => {

    const cart = ["Iphone", "Apple Watch", "Ipad", "Macbook Air"];

    const context = {
        cart: cart,
        cartLength: cart.length
    }

    return <UserContex.Provider value={context}>
            {props.children}
    </UserContex.Provider>
}

export default UserContex;
