import mathRound from "./mathRoundDecimals";
import mathRoundDecimals from "./mathRoundDecimals";
// function to completely add all information from the recipe
export default function createRecipeInfo(arr) {
    // get element from html to be injected
    let recipeTime = arr.totalTime
    if (recipeTime == 0) {
        recipeTime = "..."
    }
    const recipeInfoIngredients = document.getElementById("recipe-info-and ingredients")
// adds recipe title
    recipeInfoIngredients.innerHTML = `
    <h2 class="recipe_page-recipe-title">${arr.label}</h2>
    <h2 class="recipe-page-time-wrapper"><div class="recipe-page-time-icon"></div>${recipeTime} mins.</h2>
        <h3 class="ingredients-title">Ingredients</h3>
    `

// get element from html to be injected
    const ingredientsList = document.getElementById("ingredients-list")

    // adds list of ingredients
    arr.ingredients.map((item) => {
        ingredientsList.innerHTML += `
        <li>${item.text}</li>
        `
    })
// get element from html to be injected
    const recipeImg = document.getElementById("recipe-page-img")

    // adds img
    recipeImg.innerHTML = `
    <img class="recipe-page-img" src="${arr.image}" alt="${arr.label}">
    `
// get element from html to be injected
    const healthLabels = document.getElementById("health-labels-items")
    arr.healthLabels.map((item) => {
        healthLabels.innerHTML += `
        <li>${item}</li>
        `
    })
// get element from html to be injected
    const energy = document.getElementById("energy-field")
    const fat = document.getElementById("fat-field")
    const carbs = document.getElementById("carbs-field")
    const sugar = document.getElementById("sugar-field")
    const protein = document.getElementById("protein-field")
    const sodium = document.getElementById("sodium-field")

    const nutrients = arr.totalNutrients

    // adds all nutrient values
    energy.innerText = `${mathRoundDecimals(nutrients.ENERC_KCAL.quantity)}`
    fat.innerText = `${mathRoundDecimals(nutrients.FAT.quantity)}`
    carbs.innerText = `${mathRoundDecimals(nutrients.CHOCDF.quantity)}`
    sugar.innerText = `${mathRoundDecimals(nutrients.SUGAR.quantity)}`
    protein.innerText = `${mathRoundDecimals(nutrients.PROCNT.quantity)}`
    sodium.innerText = `${mathRoundDecimals(nutrients.NA.quantity)}`
}