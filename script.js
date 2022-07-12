var ingredients = []
var myDrinkIngredients = []
var drinkVector = []
var input = document.getElementById('input')
var button = document.getElementById('button')

const listIngredients = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for(var i=0; i < data.drinks.length; i++) {
            ingredients.push(data.drinks[i].strIngredient1)
        }
    })
    console.log(ingredients)
}

window.addEventListener('load', () => listIngredients("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"))

const addIngredients = (ingredient) => {
    if(ingredient !== null){
        myDrinkIngredients.push(ingredient)
    }
}

const createVector = (array) => {
    for(var i = 0; i < ingredients.length; i++) {
        console.log(ingredients[i], array.indexOf(ingredients[i]))
        if(array.indexOf(ingredients[i]) !== -1) {
            drinkVector.push(1)
        } else {
            drinkVector.push(0)
        }
    }
}

const getVector = () => {
    const drink = input.value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink.replace(" ", "_")}`)
    .then(res => res.json())
    .then(data => {
        const myDrink = data.drinks[0]
        addIngredients(myDrink.strIngredient1)
        addIngredients(myDrink.strIngredient2)
        addIngredients(myDrink.strIngredient3)
        addIngredients(myDrink.strIngredient4)
        addIngredients(myDrink.strIngredient5)
        addIngredients(myDrink.strIngredient6)
        addIngredients(myDrink.strIngredient7)
        addIngredients(myDrink.strIngredient8)
    })

    console.log(myDrinkIngredients)
    createVector(myDrinkIngredients)
    console.log(drinkVector)
}

button.addEventListener('click', getVector)