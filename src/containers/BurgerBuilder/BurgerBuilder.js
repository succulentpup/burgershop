import React, {Component} from 'react';
import Hoc from '../../hoc/hoc';
import Burger from '../../components/Burger/Burger';

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
                <div>Build Controls</div>
            </Hoc>
        );
    }
}

export default BurgerBuilder;
