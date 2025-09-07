import React, { createContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const UserContex = createContext({
    login: () => { },
    logout: ()=>{},
    isLoggedIn: false,
    user: null,
    cart: [],
    cartLength: 0
});

export const UserContextProvider = (props) => {

    const cart = ["Iphone", "Apple Watch", "Ipad", "Macbook Air"];

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const login = (username, password) => {
        axios.post('http://localhost:1234/api/v1/auth/login', { username, password })
            .then((res) => {
                window.localStorage.setItem('token', res.data?.token);
                setIsLoggedIn(true);
                toast.success('Logged In Successfully');
                navigate('/');
            }).catch((err) => {
                toast.error(err?.response?.data?.message);
            })
    }

    const logout = () => {
        window.localStorage.setItem('token', "");
        setIsLoggedIn(false);
        setUser(null);
    }

    useEffect(() => {
        axios.get('http://localhost:1234/api/v1/auth/profile', {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
                setIsLoggedIn(true);
            }).catch((err) => {
                setIsLoggedIn(false);
                setUser(null);
            })
    }, [isLoggedIn])

    const context = {
        login,
        logout,
        isLoggedIn,
        user,
        cart: cart,
        cartLength: cart.length
    }

    return <UserContex.Provider value={context}>
        {props.children}
    </UserContex.Provider>
}

export default UserContex;
