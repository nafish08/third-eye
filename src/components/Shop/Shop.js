import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='row'>
            <div className='col-8'>
                <div className='row row-cols-3'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className='col-4'>
                {
                    cart.map(item => <Cart
                        key={item.id}
                        item={item}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Shop;