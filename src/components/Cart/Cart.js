import React from 'react';

const Cart = (props) => {
    const { name, img } = props.item;

    return (
        <div>
            <div className='d-flex mb-5'>
                <img src={img} className='me-3' width='25' alt="" />
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Cart;