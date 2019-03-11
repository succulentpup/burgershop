import React, {Component} from 'react';
import Hoc from '../../hoc/hoc';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 2,
            bacon: 1,
            meat:1,
            cheese: 2
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
