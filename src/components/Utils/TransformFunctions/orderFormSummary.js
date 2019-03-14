import React from 'react';
import Hoc from '../../../hoc/hoc';

const OrderFormSummary = ({...ingredients}) => {
    const orderSummary = Object.keys(ingredients)
        .map(ikey => {
            return <li key ={ikey}> <span style={{textTransform: 'capitalize'}}>{ikey}:</span> {ingredients[ikey]}</li> });
    return (
        <Hoc>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {orderSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Hoc>
    );
};
export default OrderFormSummary;

