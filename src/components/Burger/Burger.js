import React from 'react';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import classes from './Burger.module.css';

const Burger = props => {
    let ingKeys = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={ingKey + i} type={ingKey}/>
                });
        }).reduce((acc,cur) => acc.concat(cur), []);
    if (ingKeys.length === 0) ingKeys = <p>Start adding ingredients</p>;
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {ingKeys}
            <BurgerIngredient type='bread-bottom'/>
        </div>);
};
export default Burger;
