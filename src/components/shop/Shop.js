import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import './Shop.css';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleCartProduct = (product) => {
        const totalCartItem = [...cart, product];
        setCart(totalCartItem);

        const totalLocalStorageProduct = totalCartItem.filter(item => item.key === product.key);
        addToDatabaseCart(product.key, totalLocalStorageProduct.length);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(item => <Product key={item.key + Math.random()} product={item} handleCartProduct={handleCartProduct} showAddToCart={true} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;