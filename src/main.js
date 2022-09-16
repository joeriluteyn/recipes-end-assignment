import fetchRecipeData from "./functions/fetchRecipeData.js";

// Fetching data from Edamam API

const submitForm = document.getElementById("onSubmit")
const ingredients = document.getElementById("ingredients-field")
const mealType = document.getElementById("meal-type-field")

submitForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    fetchRecipeData(
        ingredients.value
        )
    }
)