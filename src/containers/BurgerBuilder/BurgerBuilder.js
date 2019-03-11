import React, {Component} from 'react';
import Hoc from '../../hoc/hoc';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    render(){
        return(
            <Hoc>
                <Burger/>
                <div>Build Controls</div>
            </Hoc>
        );
    }
}
export default BurgerBuilder;
