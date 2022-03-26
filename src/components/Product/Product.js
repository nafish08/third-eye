import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
    const { name, price, img } = props.product;
    const { addToCart } = props;
    return (
        <div>
            <div className="card mb-3">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}BDT</p>
                </div>
                <div className="">
                    <button onClick={() => addToCart(props.product)} className='btn bg-warning w-100 fw-bold'>Add to Cart<FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;