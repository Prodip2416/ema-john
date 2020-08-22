import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import './Shop.css';
import Product from '../product/Product';
import Cart from '../cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
  
    const handleCartProduct = (product) =>{
        const totalCartItem = [...cart, product];
        setCart(totalCartItem);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(item => <Product product={item} handleCartProduct={handleCartProduct}/>)
                }
            </div>
           <div className="cart-container">
               <Cart cart={cart}/>
           </div>
        </div>
    );
};

export default Shop;