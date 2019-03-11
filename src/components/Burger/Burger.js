import React from 'react';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import classes from './Burger.module.css';

const burger = props => {
    console.log(`${JSON.stringify(props.ingredients)}`);
    const ingKeys = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={ingKey + i} type={ingKey}/>
                });
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {ingKeys}
            <BurgerIngredient type='bread-bottom'/>
        </div>);
};
/*
    <div className={classes.Burger}>
        <BurgerIngredient type='bread-top'/>
        <BurgerIngredient type='cheese'/>
        <BurgerIngredient type='meat'/>
        <BurgerIngredient type='bread-bottom'/>
    </div>;
*/
export default burger;
