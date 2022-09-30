import axios from "axios";
import createRecipeCardResults from "./createRecipeCardResults";

// Fetching data from Edamam API
export default async function fetchRecipeData(searchQuery, mealType, diet, cuisineType, usedFunction) {

    const URI = "https://api.edamam.com"
    const ENDPOINT = "/api/recipes/v2"
    const API_ID = "331ee4f5"
    const API_KEY = "de7d45fa31f02836d9bb8b1080ed8f9a"


    // Fetch data from the API
    try {
        const response = await axios.get(URI + ENDPOINT, {
            params: {
                type: "public",
                app_id: API_ID,
                app_key: API_KEY,
                q: searchQuery,
                mealType: mealType || null,
                diet: diet || null,
                cuisineType: cuisineType || null,
                random: true
            }
        })

        const arrayOfRecipes = response.data.hits
        usedFunction(arrayOfRecipes)
        // console.log(arrayOfRecipes)

    }    // Catch error messages and show them in the UI
    catch (e) {
        const error = document.getElementById("error-message")

        if (e.response.status === 404) {
            error.innerText = 'page not found'
        } else if (e.response.status === 500) {
            error.innerText = 'internal server error'
        }


    }
}
