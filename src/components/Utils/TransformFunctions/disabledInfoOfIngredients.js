const DisabledInfoOfIngredients = ({...ingredients}) => {
    for(let key in ingredients){
        ingredients[key] = ingredients[key] < 1;
    }
    return ingredients;
};

export default DisabledInfoOfIngredients;