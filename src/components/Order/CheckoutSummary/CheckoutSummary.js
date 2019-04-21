import React from 'react';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Your Delicious Burger waits for your payment...</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                btnType="Danger"
                clicked>CANCEL</Button>
            <Button
                btnType="Success"
                clicked>CONTINUE</Button>
        </div>
    );
};

export default CheckoutSummary;
