import React from 'react';
import classes from './BurgerControls.module.css';
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
const BurgerControls = props => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BurgerControl
                key ={ctrl.label}
                label={ctrl.label}
                added={()=>props.addedIngredients(ctrl.type)}
                removed={()=>props.removedIngredients(ctrl.type)}
            />
        ))}
    </div>
);

export default BurgerControls;
