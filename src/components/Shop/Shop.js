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
    const chooseForMe = (cart) => {
        const choosen = cart.map(obj => ({ ...obj }));
        var randomItem = choosen[Math.floor(Math.random() * choosen.length)];
        console.log(randomItem);
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
                <h1>Selected Items:</h1>
                {
                    cart.map(item => <Cart
                        key={item.id}
                        item={item}
                    ></Cart>)
                }

                <div>
                    <button onClick={() => chooseForMe(cart)} className='btn border d-block'>CHOOSE 1 FOR ME</button>
                    <button className='btn border d-block'>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;