import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    let shipping = 0;
    if (shipping > 35) {
        shipping = 0
    } else if (shipping > 15) {
        shipping = 4.99;
    }
    const grandTotal = (shipping + totalPrice).toFixed(2);
    return (
        <div>
            <h3>Order Summery : {cart.length}</h3>
            <p>Shipping : {shipping}</p>
            <h4>Total Item Price : {totalPrice}</h4>
            <h3 className="order-Total">Order Total : {grandTotal}</h3>
        </div>
    );
};

export default Cart;