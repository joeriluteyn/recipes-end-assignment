import fetchRecipeData from "./functions/fetchRecipeData.js";
import createRecipeCardResults from "./functions/createRecipeCardResults";
import createRandomCards from "./functions/createRandomCards";

// Get elements from HTML to be injected with Javascript
const submitForm = document.getElementById("onSubmit")
const ingredients = document.getElementById("ingredients-field")
const mealType = document.getElementById("meal-type-field")
const diet = document.getElementById("diet-field")
const cuisineType = document.getElementById("cuisine-field")
const time = document.getElementById("time-field")


// Event listener, when submit button is clicked function fetchRecipeData is activated
submitForm.addEventListener('submit', (e) => {
        e.preventDefault()
        fetchRecipeData(
            ingredients.value,
            mealType.value,
            diet.value,
            cuisineType.value,
            time.value,
            createRecipeCardResults
        )
    }
)

// function of randomCards with search option salt, will generate 3 random cards with salt as ingredient
function activateRandomCards() {
    fetchRecipeData("salt", "", "", "", "", createRandomCards)
}

// Activate the function
activateRandomCards()

