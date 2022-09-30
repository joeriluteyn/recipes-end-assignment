import axios from "axios";
import createRecipeInfo from "./createRecipeInfo";

export default async function recipePageFetchRecipeData () {

    const URI = "https://api.edamam.com"
    const ENDPOINT = "/api/recipes/v2/"
    const API_ID = "331ee4f5"
    const API_KEY = "de7d45fa31f02836d9bb8b1080ed8f9a"
try{
    const response = await axios.get(URI + ENDPOINT, {
        params: {
            type: "public",
            app_id: API_ID,
            app_key: API_KEY,
            q: "pasta"
        }
    })

    const recipeData = response.data.hits[0].recipe
    createRecipeInfo(recipeData)
    console.log(recipeData)

} catch (e) {
    const error = document.getElementById("error-message")

    if (e.response.status === 404) {
        error.innerText = 'page not found'
    } else if (e.response.status === 500) {
        error.innerText = 'internal server error'
    }
}

}