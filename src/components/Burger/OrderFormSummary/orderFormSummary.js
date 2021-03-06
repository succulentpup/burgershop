import React from 'react';
import Hoc from '../../../hoc/HocAux/hoc';
import Button from "../../UI/Button/Button";

const OrderFormSummary = (props) => {
    const orderSummary = Object.keys(props.ingredients)
        .map(ikey => {
            return <li key={ikey}><span style={{textTransform: 'capitalize'}}>{ikey}:</span> {props.ingredients[ikey]}</li>
        });
    return (
        <Hoc>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {orderSummary}
            </ul>
            <p><strong>Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType={'Danger'} clicked={props.cancelPurchase}>CANCELLED</Button>
            <Button btnType={'Success'} clicked={props.continuePurchase}>CONTINUE</Button>
        </Hoc>
    );
};
export default OrderFormSummary;

