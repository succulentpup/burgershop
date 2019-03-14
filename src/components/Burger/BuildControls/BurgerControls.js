import React from 'react';
import classes from './BurgerControls.module.css';
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
const BurgerControls = props => {
    return (<div className={classes.BuildControls}>
            <p>Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BurgerControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.addedIngredients(ctrl.type)}
                    removed={() => props.removedIngredients(ctrl.type)}
                    disable={props.disable[ctrl.type]}
                />
            ))}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered} >
                ORDER NOW
            </button>
        </div>
    );
};

export default BurgerControls;
