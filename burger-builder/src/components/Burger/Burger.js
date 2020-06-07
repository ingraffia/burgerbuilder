import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // transform object from burger builder into an array with only the keys (ingredient names)
    let transformedIngredients = Object.keys(props.ingredients)
    
    // run a function on each element in the array
    .map(ingKey => {
        // number of ingredients
        // [salad, bacon, cheese, cheese, meat, meat]
        return [...Array(props.ingredients[ingKey])]
        .map((_, i) => {
            // creating a BurgerIngredient for each item in object
            // <BurgerIngredient key={salad0} type={salad} />
            // <BurgerIngredient key={bacon0} type={bacon} />
            // <BurgerIngredient key={cheese0} type={cheese} />
            // <BurgerIngredient key={cheese1} type={cheese} />
            // <BurgerIngredient key={meat0} type={meat} />
            // <BurgerIngredient key={meat1} type={meat} />
            return <BurgerIngredient key={ingKey + i} type={ingKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add additional ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;