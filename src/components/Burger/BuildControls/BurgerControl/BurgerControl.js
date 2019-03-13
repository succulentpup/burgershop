import React from 'react';
import classes from './BurgerControl.module.css';

const BurgerControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More} onClick={props.added}>+</button>
            <button className={classes.Less} onClick={props.removed} disabled={props.disable}>-</button>
        </div>
    );
};

export default BurgerControl;
