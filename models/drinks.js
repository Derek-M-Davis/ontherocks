const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({

    strDrink: String,
    strDrinkThumb: String,
    strIngredient1: String,
    strIngredient2: String,
    strIngredient3: String,
    strIngredient4: String,
    strIngredient5: String,
    strIngredient6: String,
    strIngredient7: String,
    strIngredient8: String,
    strIngredient9: String,
    strIngredient10: String,
    strIngredient11: String,
    strIngredient12: String,
    strIngredient13: String,
    strIngredient14: String,
    strIngredient15: String,
    strInstructions: String,
    strMeasure1: String,
    strMeasure2: String,
    strMeasure3: String,
    strMeasure4: String,
    strMeasure5: String,
    strMeasure6: String,
    strMeasure7: String,
    strMeasure8: String,
    strMeasure9: String,
    strMeasure10: String,
    strMeasure11: String,
    strMeasure12: String,
    strMeasure13: String,
    strMeasure14: String,
    strMeasure15: String,
    notes: String

});

const Drinks = mongoose.model('Drink', drinkSchema);


module.exports = Drinks;
