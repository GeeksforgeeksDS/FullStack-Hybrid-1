import React, {useState} from 'react'

const Product = (props) => {

    let [name, setName] = useState(props.name)

    const cardClickHandler = () => {
        setName(() => 'Anonymous');
    }

    return (
        <figure onClick={cardClickHandler} className='product'>
            <img src={props.image} />
            <figcaption>
                <h2>{name}</h2>
                <h2>Price: $ 100</h2>
                <p>This is a just a placeholder para</p>
            </figcaption>
        </figure>
    )
}

export default Product

