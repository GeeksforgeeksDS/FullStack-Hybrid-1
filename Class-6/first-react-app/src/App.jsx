import { Fragment } from 'react';
import './App.css';
import Product from './components/Product';
import ProductList from './components/ProductList';

function App() {

    const randomNum = Math.floor(Math.random() * 10 + 1);

    const products = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
            price: 100,
            title: "Macbook Air M1"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
            price: 200,
            title: "Macbook Air M2"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
            price: 300,
            title: "Macbook Air M3"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
            price: 300,
            title: "Macbook Air M3"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
            price: 300,
            title: "Macbook Air M3"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
            price: 300,
            title: "Macbook Air M3"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
            price: 300,
            title: "Macbook Air M3"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
            price: 300,
            title: "Macbook Air M3"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
            price: 300,
            title: "Macbook Air M3"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
            price: 300,
            title: "Macbook Air M3"
        },

    ]

    return (
        <>
            {/* <h1>My first react app</h1>
            <h2>My random no is {randomNum}</h2>
            {randomNum === 7 ? <img src='https://s28637.pcdn.co/wp-content/uploads/2015/08/Winning-GIF.gif' /> : <p>Its not a lucky number</p> }
            <img src="https://images.unsplash.com/photo-1755174578188-0742b622d184?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id, iste repudiandae illo unde explicabo omnis fuga qui minima, voluptates ut sed rerum totam similique iusto possimus, quia delectus molestias.</p>

            <ul>
                {
                    todos.map((todo) => <li>{todo}</li>)
                }
            </ul> */}

            <ProductList products={products} />

        </>
    )
}

export default App
