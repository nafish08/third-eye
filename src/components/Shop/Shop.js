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
    // Adding Selected Items in a array
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    // For random item suggestion
    const chooseForMe = (cart) => {
        const choosen = cart.map(obj => ({ ...obj }));
        var randomItem = choosen[Math.floor(Math.random() * choosen.length)];
        alert(randomItem.name + " will be best for you.");
    }
    // Clear Previous Selected Items
    const chooseAgain = () => {
        setCart([]);
    }

    return (
        <div className='row'>
            <div className='col-12 col-lg-8'>
                <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className='col-12 col-lg-4 bg-dark p-3'>
                <h1 className='text-light mb-3'>Selected Items:</h1>
                {
                    cart.map(item => <Cart
                        key={item.id}
                        item={item}
                    ></Cart>)
                }

                <div>
                    <button onClick={() => chooseForMe(cart)} className='btn border d-block mb-2 bg-light'>CHOOSE 1 FOR ME</button>
                    <button onClick={() => chooseAgain(cart)} className='btn border d-block bg-light'>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;