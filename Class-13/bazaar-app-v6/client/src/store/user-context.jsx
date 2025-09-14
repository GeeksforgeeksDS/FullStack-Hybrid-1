import React, { createContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const UserContex = createContext({
    login: () => { },
    logout: () => { },
    isLoggedIn: false,
    user: null,
    cart: [],
    cartLength: 0,
    loading: true
});

export const UserContextProvider = (props) => {

    const cart = ["Iphone", "Apple Watch", "Ipad", "Macbook Air"];

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const login = (username, password) => {
        axios.post(`${baseUrl}/api/v1/auth/login`, { username, password })
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
        axios.get(`${baseUrl}/api/v1/auth/profile`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                setUser(res.data);
                setIsLoggedIn(true);
            }).catch((err) => {
                setIsLoggedIn(false);
                setUser(null);
            })
            .finally(() => {
                setLoading(false);
         })
    }, [isLoggedIn])

    const context = {
        login,
        logout,
        isLoggedIn,
        user,
        cart: cart,
        cartLength: cart.length,
        loading
    }

    return <UserContex.Provider value={context}>
        {props.children}
    </UserContex.Provider>
}

export default UserContex;
