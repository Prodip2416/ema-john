import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData/index';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const getSavedItem = getDatabaseCart();
        const productKeys = Object.keys(getSavedItem);

        const totalProduct = productKeys.map(key => {
            const product = fakeData.find(item => item.key === key);
            product.quantity = getSavedItem[key];
            return product;
        })
        setCart(totalProduct);
    }, [])

    return (
        <div>
            <h1>Total Cart Item : {cart.length}</h1>
            {
                cart.map(item => <ReviewItem key={item.key} product={item}></ReviewItem> )
            }
        </div>
    );
};

export default Review;