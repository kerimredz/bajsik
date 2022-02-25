import React from 'react';
import './cart.css';

const Cart = (props) => {
    return(
        <div className = "cart">
            <div className = "cart-item">
                <div className = "cart-item-name">
                    <p>{props.name}</p>
                </div>
                <div className = "cart-item-value">
                    <p>{props.value} kW</p>
                </div>
                <div className = "cart-item-kolicina">
                    <p>Kol: </p>
                    <p>{props.quantity}</p>
                </div>
                <div className = "cart-item-shop" onClick={() => window.open(props.link, "Popup")} alt='' src={props.link}>
                    <p>Kupi</p>
                </div>
                <div className = "cart-item-delete" onClick={props.removeitem}>
                    <p>X</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
