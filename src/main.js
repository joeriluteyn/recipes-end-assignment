import fetchRecipeData from "./functions/fetchRecipeData.js";

const submitForm = document.getElementById("onSubmit")
const ingredients = document.getElementById("ingredients-field")
const mealType = document.getElementById("meal-type-field")
const diet = document.getElementById("diet-field")
const cuisineType = document.getElementById("cuisine-field")

submitForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    fetchRecipeData(
        ingredients.value,
        mealType.value,
        diet.value,
        cuisineType.value
        )
    }
)

