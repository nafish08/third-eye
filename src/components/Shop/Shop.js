import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                <div className='col'>
                    <div className='card h-100'>
                        {
                            products.map(product => console.log(product))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;