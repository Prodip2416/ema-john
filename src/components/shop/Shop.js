import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    console.log(products);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(item => <li>{item.name}</li>)
                }
            </div>
           <div className="cart-container">
               <h1>This is cart section</h1>
           </div>
        </div>
    );
};

export default Shop;