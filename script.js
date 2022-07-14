var ingredients = ["Dark rum", "Light rum", "Vodka", "Orange juice", "Absolut Kurant", "Grand Marnier", "Chambord raspberry liqueur", "Midori melon liqueur", "Malibu rum", "Amaretto", "Cranberry juice", "Pineapple juice", "Lager", "Tequila", "151 proof rum", "Dark Creme de Cacao", "Cointreau", "Milk", "Coconut liqueur", "Vanilla ice-cream", "Wild Turkey", "Goldschlager", "Jägermeister", "Rumple Minze", "Jack Daniels", "Johnnie Walker", "Jim Beam", "Gin", "Triple sec", "Coca-Cola", "Sweet and sour", "Bitters", "Lemon", "Peach Vodka", "Vanilla vodka", "Blue Curacao", "Blueberry schnapps", "Sour mix", "7-Up", "Creme de Cacao", "Lemon juice", "Kahlua", "Baileys irish cream", "Frangelico", "Roses sweetened lime juice", "Cranberry Juice", "Sprite", "Lemon Juice", "Grenadine", "Cognac", "Heavy cream", "Egg White", "Absolut Vodka", "Tonic water", "Applejack", "Grapefruit juice", "Strawberry schnapps", "Club soda", "Apple juice", "Maraschino cherry", "Pisang Ambon", "Lemonade", "Peach nectar", "Egg white", "Vermouth", "Lime juice", "Sugar", "Mint", "Scotch", "Sweet Vermouth", "Dry Vermouth", "Orange bitters", "lemon juice", "maraschino liqueur", "Light cream", "Nutmeg", "Blended whiskey", "Bourbon", "Blackberry brandy", "Lemon peel", "Soda water", "Coffee", "Cream", "Creme de Banane", "Absolut Citron", "Orange Curacao", "Strawberry liqueur", "Sambuca", "Orange Bitters", "Green Chartreuse", "Irish cream", "Champagne", "Peach schnapps", "Sugar syrup", "Creme de Mure", "Rye Whiskey", "Maraschino Liqueur", "Angostura Bitters", "Maraschino Cherry", "Maraschino liqueur", "Passion fruit juice", "Rum", "Galliano", "Pineapple Juice", "Lime Juice", "Prosecco", "Corona", "Bacardi Limon", "Hot Chocolate", "Cherry Heering", "Wormwood", "Ice", "Sloe gin", "Banana liqueur", "Southern Comfort", "Lime", "Everclear", "Mountain Dew", "Surge", "Tomato juice", "Worcestershire sauce", "Tabasco sauce", "Cherry", "Powdered sugar", "Cachaca", "Cherry brandy", "Brandy", "Spiced rum", "Ginger ale", "Falernum", "Añejo rum", "blackstrap rum", "Port", "Carbonated water", "Water", "Vanilla", "Caramel coloring", "White rum", "Campari", "Egg yolk", "Wine", "Vanilla extract", "Chocolate liqueur", "Triple Sec", "Lillet Blanc", "Absinthe", "Chocolate", "Grain alcohol", "Peppermint extract", "Food coloring", "gin", "Peach Bitters", "Cider", "Blackcurrant cordial", "Fruit punch", "Olive", "Olive Brine", "demerara Sugar", "Pisco", "Pineapple Syrup", "St. Germain", "Pepper", "Lavender", "Dark Rum", "Ginger Beer", "Whiskey", "Hot Damn", "Dubonnet Rouge", "Cinnamon", "Whipped cream", "Chocolate syrup", "Salt", "Whipping cream", "Vanilla syrup", "Espresso", "Egg", "Condensed milk", "Apricot brandy", "Elderflower cordial", "Mezcal", "Coffee liqueur", "Rose", "Strawberries", "Orange", "Benedictine", "Yoghurt", "Banana", "Fruit", "Honey", "Figs", "Thyme", "Tonic Water", "Apple", "Apricot Nectar", "Pomegranate juice", "lemon", "Soda Water", "Raspberry Liqueur", "pineapple juice", "Lillet", "Orange Peel", "Fruit juice", "Firewater", "Absolut Peppar", "Dr. Pepper", "Beer", "Sarsaparilla", "Pineapple", "Sugar Syrup", "Orange peel", "Sirup of roses", "Red wine", "Cloves", "Grapefruit Juice", "Lemon Peel", "Orange spiral", "Green Creme de Menthe", "Whisky", "White Rum", "Tea", "Blackberries", "Grape juice", "Carbonated soft drink", "Sherbet", "Irish whiskey", "Corn syrup", "Cherry Juice", "Red Chili Flakes", "Ginger", "Butter", "Half-and-half", "Marshmallows", "Brown sugar", "Iced tea", "Coconut syrup", "Peach brandy", "Guinness stout", "Aperol", "Anis", "Jello", "Mint syrup", "Yellow Chartreuse", "Apple brandy", "Tennessee whiskey", "Creme de Cassis", "Kiwi liqueur", "Bitter lemon", "Kiwi", "Cranberry vodka", "Apfelkorn", "Schweppes Russchian", "Kool-Aid", "Papaya", "Lime peel", "Angostura bitters", "Drambuie", "Asafoetida", "Cayenne pepper", "Tia maria", "Mango", "Coconut Liqueur", "Fresh Lemon Juice", "Cumin seed", "Cocoa powder", "Orgeat syrup", "Tomato Juice", "Hot Sauce", "Worcestershire Sauce", "Soy Sauce", "Pina colada mix", "Daiquiri mix", "Pepsi Cola", "Cardamom", "Black pepper", "Cucumber", "Butterscotch schnapps", "White Creme de Menthe", "Lemon-lime soda", "Rye whiskey", "Oreo cookie", "Jagermeister", "Orange Juice", "Rosemary Syrup", "Rosemary", "Grape Soda", "Apricot Brandy", "Egg Yolk", "Blended Scotch", "Honey syrup", "Ginger Syrup", "Islay single malt Scotch", "Coconut milk", "Passoa", "Passion fruit syrup", "Cherry liqueur", "Fresh Lime Juice", "Pink lemonade", "Coffee brandy", "Lime vodka", "Sherry", "Black Sambuca", "Raspberry syrup", "Crown Royal", "Raspberry vodka", "Ricard", "Peychaud bitters", "Amaro Montenegro", "Ruby Port", "Blood Orange", "Advocaat", "Allspice", "Godiva liqueur", "Anisette", "Fresca", "Cherries", "Irish Whiskey", "Creme De Banane", "Celery salt", "Coriander", "Rosso Vermouth", "7-up", "Melon Liqueur", "Yukon Jack", "Maple syrup", "Limeade", "Agave Syrup", "Cream of coconut", "White Wine", "Apple Brandy", "Peachtree schnapps", "Root beer", "Gold rum", "Pernod", "Ouzo", "Zima"]
var myDrinkIngredients = []
var drinkVector = []

const dot = (v1, v2) => {
    if(v1.length === v2.length){
        var sum = 0
        for(var i = 0; i < v1.length; i++){
            sum += v1[i] * v2[i]
        }
        return sum
    }
}

const cosine = (v1, v2) => {
    return dot(v1, v2) / (Math.sqrt(dot(v1, v1) * Math.sqrt(dot(v2, v2))) )
}

var input = document.getElementById('input')
var button = document.getElementById('button')

const addIngredients = (ingredient) => {
    if(ingredient !== null){
        myDrinkIngredients.push(ingredient)
    }
}

const createVector = (array) => {
    for(var i = 0; i < ingredients.length; i++) {
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
    .then(() => {
        createVector(myDrinkIngredients)
    })
}

const getData = () => {
    fetch('./data.json')    
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for(var i = 0; i < data.drinks.length; i++){
            const strVector = data.drinks[i].vector.split(',')
            var vector = strVector.map(str => parseInt(str))
            var vectorCosine = cosine(vector, drinkVector)
            if(vectorCosine > 0){
                console.log(vectorCosine, data.drinks[i].drink)
            }
        }
    })
}

button.addEventListener('click', getVector)
document.getElementById('meupiru').addEventListener('click', getData)