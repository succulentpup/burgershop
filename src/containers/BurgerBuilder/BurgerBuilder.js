import React, {Component} from 'react';
import Axios from '../../axios-orders';
import Hoc from '../../hoc/HocAux/hoc';
import Burger from '../../components/Burger/Burger';
import BurgerControls from "../../components/Burger/BuildControls/BurgerControls";
import DisabledInfoOfIngredients from '../../components/Utils/TransformFunctions/disabledInfoOfIngredients';
import OrderFormSummary from '../../components/Burger/OrderFormSummary/orderFormSummary';
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";

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
        totalPrice: getBaseBurgerPrice(),
        purchased: false,
        loading: false
    };
    addIngredientHandler = type => {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        const updatedPrice = this.state.totalPrice + getIngredientsPriceList()[type];
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
    };
    removeIngredientHandler = type => {
        const updatedIngredients = {...this.state.ingredients};
        const updatedCount = this.state.ingredients[type] - 1;
        updatedIngredients[type] = updatedCount > 0 ? updatedCount : 0;
        let updatedPrice = this.state.totalPrice - getIngredientsPriceList()[type];
        updatedPrice = updatedPrice > getBaseBurgerPrice() ? updatedPrice : getBaseBurgerPrice();
        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
    };

    getPurchasable = () => this.state.totalPrice > getBaseBurgerPrice();
    getDisabledInfo = ingredients => DisabledInfoOfIngredients(ingredients);
    setPurchased = () => this.setState({purchased: true});
    cancelPurchase = () => this.setState({purchased: false});
    continuePurchase = () => {
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            deliveryType: 'fastest',
            customer: {
                name: 'Ganesh',
                mob: '+91 91xxxxxx00',
                email: 'test@test.dev',
                country: 'India'
            }
        };
        this.setState({loading: true});
        Axios.post('/order.json', order)
            .then(() => {
                this.setState({
                    ingredients: {
                        salad: 0,
                        bacon: 0,
                        meat: 0,
                        cheese: 0
                    },
                    totalPrice: getBaseBurgerPrice(),
                    purchased: false,
                    loading: false
                });
            })
            .catch(() => {
                    this.setState({
                        ingredients: {
                            salad: 0,
                            bacon: 0,
                            meat: 0,
                            cheese: 0
                        },
                        totalPrice: getBaseBurgerPrice(),
                        purchased: false,
                        loading: false
                    })
                }
            );
    };

    render() {
        let orderSummary = <OrderFormSummary ingredients={this.state.ingredients}
                                             cancelPurchase={this.cancelPurchase}
                                             continuePurchase={this.continuePurchase}
                                             price={this.state.totalPrice}/>;
        if (this.state.loading) orderSummary = <Spinner/>;

        return (
            <Hoc>
                <Modal show={this.state.purchased}
                       cancelOrder={this.cancelPurchase}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    addedIngredients={this.addIngredientHandler}
                    removedIngredients={this.removeIngredientHandler}
                    disable={this.getDisabledInfo(this.state.ingredients)}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.getPurchasable()}
                    ordered={this.setPurchased}
                />
            </Hoc>
        );
    }
}

export default BurgerBuilder;
