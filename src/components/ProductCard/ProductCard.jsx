import './ProductCard.css'
import React from "react";
import Button from "../Button/Button.jsx";
const ProductCard = ({product, index, onIncrease, onDecrease}) => {
    return (
        <>
            <div className="product" key={index}>
                <img src={product.image} alt=""/>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <div className="button-container">
                    <Button text={'Increase'} onClick={() => onIncrease(product.id, 1)}/>
                    <Button text={'Decrease'} onClick={() => onDecrease(product.id, -1)}/>
                </div>
            </div>
        </>
    )
}

export default ProductCard



