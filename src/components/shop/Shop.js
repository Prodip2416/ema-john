import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import './Shop.css';
import Product from '../product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(item => <Product product={item}/>)
                }
            </div>
           <div className="cart-container">
               <h1>This is cart section</h1>
           </div>
        </div>
    );
};

export default Shop;