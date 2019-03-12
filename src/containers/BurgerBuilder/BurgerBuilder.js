import React, {Component} from 'react';
import Hoc from '../../hoc/hoc';
import Burger from '../../components/Burger/Burger';
import BurgerControls from "../../components/Burger/BuildControls/BurgerControls";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat:0,
            cheese: 0
        }
    };
    addIngredientHandler = type => {
        const updatedIngredients = {...this.state.ingredients};
        const updatedCount = this.state.ingredients[type] + 1;
        updatedIngredients[type] = updatedCount;
        this.setState({ingredients: updatedIngredients});
    };
    removeIngredientHandler = type => {
        const updatedIngredients = {...this.state.ingredients};
        const updatedCount = this.state.ingredients[type] - 1;
        updatedIngredients[type] = updatedCount > 0 ? updatedCount : 0;
        this.setState({ingredients: updatedIngredients});
    };
    render() {
        return (
            <Hoc>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    addedIngredients={this.addIngredientHandler}
                    removedIngredients={this.removeIngredientHandler}
                />
            </Hoc>
        );
    }
}

export default BurgerBuilder;
