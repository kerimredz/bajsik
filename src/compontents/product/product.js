import React from 'react';
import './product.css';

const Product = (props) => {
    return(
        <div className = "product">
            <img src={props.img} />
            <div className = "product-text">
                <h4 className = "product-text-h5">{props.name}</h4>
                <div className = "product-text-button" onClick={props.handleClick}><h2>+</h2></div>
            </div>
        </div>
    );
};

export default Product;


