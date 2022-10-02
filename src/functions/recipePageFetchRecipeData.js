import axios from "axios";
import createRecipeInfo from "./createRecipeInfo";

// async function te get data from API based on id
export default async function recipePageFetchRecipeData(id) {
// values for API
    const URI = "https://api.edamam.com"
    const ENDPOINT = "/api/recipes/v2/"
    const API_ID = "331ee4f5"
    const API_KEY = "de7d45fa31f02836d9bb8b1080ed8f9a"

    try {
        const response = await axios.get(URI + ENDPOINT + id, {
            // parameters to be given to API
            params: {
                type: "public",
                app_id: API_ID,
                app_key: API_KEY,

            }
        })


// data to be given to createRecipeInfo
        const recipeData = response.data.recipe
        createRecipeInfo(recipeData)


    } catch (e) {
        const error = document.getElementById("error-message")

        if (e.response.status === 404) {
            error.innerText = 'page not found'
        } else if (e.response.status === 500) {
            error.innerText = 'internal server error'
        }
    }

}