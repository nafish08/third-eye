import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
    // Destructuring Objects
    const { name, price, img } = props.product;
    const { addToCart } = props;
    return (
        <div>
            {/* Item Cards */}
            <div className="card mb-3 pb-3">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}BDT</p>
                </div>
                <div className="">
                    {/* Add to Cart Button */}
                    <button onClick={() => addToCart(props.product)} className='btn bg-danger text-light fw-bold'>Add to Cart&nbsp;<FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;