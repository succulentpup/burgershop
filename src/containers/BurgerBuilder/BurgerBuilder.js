import React, {Component} from 'react';
import Hoc from '../../hoc/hoc';
import Burger from '../../components/Burger/Burger';
import BurgerControls from "../../components/Burger/BuildControls/BurgerControls";

const getIngredientsPriceList = () => ({
    salad: 0.5,
    bacon: 0.4,
    meat: 1.3,
    cheese: 0.5
});

const getBaseBurgerPrice = () => 4;

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: getBaseBurgerPrice()
    };
    addIngredientHandler = type => {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        const updatedPrice = this.state.totalPrice + getIngredientsPriceList().type;
        this.setState({ingredients: updatedIngredients,totalPrice: updatedPrice});
    };
    removeIngredientHandler = type => {
        const updatedIngredients = {...this.state.ingredients};
        const updatedCount = this.state.ingredients[type] - 1;
        updatedIngredients[type] = updatedCount > 0 ? updatedCount : 0;
        let updatedPrice = this.state.totalPrice - getIngredientsPriceList().type;
        updatedPrice = updatedPrice > getBaseBurgerPrice() ? updatedPrice : getBaseBurgerPrice();
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
    };

    getDisabledInfo = () => {
        const {...ingredients} = this.state.ingredients;
        for(let key in ingredients){
            ingredients[key] = ingredients[key] < 1;
        }
        return ingredients;
    };
    render() {
        return (
            <Hoc>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    addedIngredients={this.addIngredientHandler}
                    removedIngredients={this.removeIngredientHandler}
                    disable={this.getDisabledInfo()}
                />
            </Hoc>
        );
    }
}

export default BurgerBuilder;
