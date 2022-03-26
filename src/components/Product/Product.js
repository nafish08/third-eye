import React from 'react';

const Product = (props) => {
    const { id, name, price, img } = props.product;
    return (

        <div>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}BDT</p>
                </div>
                <div className="">
                    <button className='btn bg-warning w-100'>Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default Product;