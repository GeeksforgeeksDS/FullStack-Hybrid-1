import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
    const products = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
            price: 100,
            title: "Macbook Air M1",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia impedit laborum dolorem enim aliquid"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
            price: 200,
            title: "Macbook Air M2",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia impedit laborum dolorem enim aliquid"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
            price: 300,
            title: "Macbook Air M3",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia impedit laborum dolorem enim aliquid"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
            price: 300,
            title: "Macbook Air M3",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia impedit laborum dolorem enim aliquid"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
            price: 300,
            title: "Macbook Air M3",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia impedit laborum dolorem enim aliquid"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
            price: 300,
            title: "Macbook Air M3",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia impedit laborum dolorem enim aliquid"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
            price: 300,
            title: "Macbook Air M3",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia impedit laborum dolorem enim aliquid"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
            price: 300,
            title: "Macbook Air M3",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia impedit laborum dolorem enim aliquid"
        },
        {
            id: 10,
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
            price: 300,
            title: "Macbook Air M3",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia impedit laborum dolorem enim aliquid"
        },
        {
            id: 11,
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
            price: 300,
            title: "Macbook Air M3",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia impedit laborum dolorem enim aliquid"
        },

    ]
    return <ProductList products={ products } />
}

export default HomePage
