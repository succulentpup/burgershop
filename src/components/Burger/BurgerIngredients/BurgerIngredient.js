import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {
        const ingredientType = {
            'bread-bottom': (<div className={classes.BreadBottom}></div>)
            , 'bread-top': (<div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>)
            , 'meat': (<div className={classes.Meat}></div>)
            , 'cheese': (<div className={classes.Cheese}></div>)
            , 'bacon': (<div className={classes.Bacon}></div>)
            , 'salad': (<div className={classes.Salad}></div>)
        };
        console.log(`props type: ${this.props.type}`);
        return ingredientType[this.props.type];
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
