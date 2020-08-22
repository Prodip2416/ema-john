import React, { useState } from 'react';
import fakeData from '../../fakeData/index';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    console.log(products);
    return (
        <div>
            <h1>This is shop</h1>
            {
                products.map(item => <li>{item.name}</li> )
            }
        </div>
    );
};

export default Shop;