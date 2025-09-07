import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import { Toaster } from 'react-hot-toast';
import ShowProduct from './pages/ShowProduct';
import PrivateRoutes from './components/PrivateRoutes';
import { useContext } from 'react';
import UserContex from './store/user-context';

function App() {

    const { isLoggedIn } = useContext(UserContex);

    return (
        <Fragment>
            <Navbar />
            <Toaster/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<SignUp />} />
                <Route path='/cart' element={<Cart />} />
                <Route element={<PrivateRoutes isLoggedIn={ isLoggedIn } />}>
                    <Route path='/products/:productId' element={<ShowProduct />} />
                </Route>
            </Routes>
        </Fragment>
    )
}

export default App
