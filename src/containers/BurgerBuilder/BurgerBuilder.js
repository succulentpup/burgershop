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

    render() {
        return (
            <Hoc>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls/>
            </Hoc>
        );
    }
}

export default BurgerBuilder;
