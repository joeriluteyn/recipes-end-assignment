import mathRound from "./mathRound";

export default function createRecipeInfo (arr) {
    const recipeInfoIngredients = document.getElementById("recipe-info-and ingredients")

    recipeInfoIngredients.innerHTML = `
    <h3 class="recipe_page-recipe-title">${arr.label}</h3>
    <h3><img class="recipe_page-time-icon" src="../Assets/icons/time.png" alt="time">${arr.totalTime} mins.</h3>
        <h4 class="ingredients-title">Ingredients</h4>
    `
    console.log(arr)

    const ingredientsList = document.getElementById("ingredients-list")

    arr.ingredients.map((item) => {
        ingredientsList.innerHTML += `
        <li>${item.text}</li>
        `
    })

    const recipeImg = document.getElementById("recipe-page-img")
    recipeImg.innerHTML =`
    <img class="recipe-page-img" src="${arr.image}" alt="${arr.label}">
    `

    const healthLabels = document.getElementById("health-labels-items")
    arr.healthLabels.map((item) =>{
        healthLabels.innerHTML +=`
        <li>${item}</li>
        `
    })

    const energy = document.getElementById("energy-field")
    const fat = document.getElementById("fat-field")
    const carbs = document.getElementById("carbs-field")
    const sugar = document.getElementById("sugar-field")
    const protein = document.getElementById("protein-field")
    const sodium = document.getElementById("sodium-field")

    const nutrients = arr.totalNutrients
    console.log(nutrients)



    energy.innerText = `${mathRound(nutrients.ENERC_KCAL.quantity)}`
    fat.innerText = `${mathRound(nutrients.FAT.quantity)}`
    carbs.innerText = `${mathRound(nutrients.CHOCDF.quantity)}`
    sugar.innerText = `${mathRound(nutrients.SUGAR.quantity)}`
    protein.innerText = `${mathRound(nutrients.PROCNT.quantity)}`
    sodium.innerText = `${mathRound(nutrients.NA.quantity)}`
}