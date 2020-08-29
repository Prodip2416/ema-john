import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    console.log(props.product);
    return (
        <div className="item-review">
            <p>{name}</p>
            <h3>Quantity : {quantity}</h3>
            <button className="cart-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;