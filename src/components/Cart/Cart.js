import React from 'react';

const Cart = (props) => {
    const { name, img } = props.item;

    return (
        <div>
            <h4>{name}</h4>
        </div>
    );
};

export default Cart;