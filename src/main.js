import fetchRecipeData from "./functions/fetchRecipeData.js";
import axios from "axios";
import createRecipeList from "./functions/createRecipeList";
import createRandomCards from "./functions/createRandomCards";

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
        cuisineType.value,
        createRecipeList
        )
    }
)


function activateRandomCards (){
    fetchRecipeData("pasta", "Breakfast", "balanced", "italian", createRandomCards)
}

activateRandomCards()

document.addEventListener('DOMContentLoaded', (event)=>{
    event.preventDefault()
    const parameters = new URLSearchParams(window.location.search)
    const id = parameters.get("id")
    console.log(id)
})

console.log("hallo")