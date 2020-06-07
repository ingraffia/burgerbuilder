import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        // how many in array
        const oldCount = this.state.ingredients[type];
        // how many of ingredient in array plus another
        const updatedCount = oldCount + 1;
        // array keeps track of types of ingredients
        const updatedIngredients = {
            ...this.state.ingredients
        }
        // keep track of how many per ingredient
        updatedIngredients[type] = updatedCount;
        // the price of the item
        const priceAddition = INGREDIENT_PRICES[type];
        // the price of the previous item(s), starts at 4
        const oldPrice = this.state.totalPrice;
        // price of the previous items plus the newest item
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler} 
                disabled={disabledInfo}
                price={this.state.totalPrice} />
            </Aux>
        )
    }
}

export default BurgerBuilder;