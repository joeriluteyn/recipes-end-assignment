import axios from "axios";
import calculateServing from "./calculateServing";
// async function to get data from edamam API
export default async function fetchCaloriesFatCarbsData( product, amount){
    // values for API

    const URI = "https://api.edamam.com"
    const ENDPOINT = "/api/food-database/v2/parser"
    const API_ID = "0daed655"
    const API_KEY = "3ba192721767a0c9f812f27900774f05"
    const data = document.getElementById("product-output")
// try block to get data from edamam API
    try {

        const response = await axios.get(URI + ENDPOINT,{
            // parameters to be given to API
            params: {
                app_id: API_ID,
                app_key: API_KEY,
                ingr: product
            }
        })
// variables to be given to calculateServing with path from API
        const servingAmount = amount
        const arrayOfingredient = response.data.hints[0]
        const productName = arrayOfingredient.food.label
        const productCalories = arrayOfingredient.food.nutrients.ENERC_KCAL
        const fat = arrayOfingredient.food.nutrients.FAT
        const carbs = arrayOfingredient.food.nutrients.CHOCDF
// activate function with given parameters
        calculateServing(servingAmount, productName, productCalories, fat, carbs)

    }
    // catch errors
    catch (e) {
        const error = document.getElementById("error-message")

        if (e.response.status === 404) {
            error.innerText = 'page not found'
        } else if (e.response.status === 500) {
            error.innerText = 'internal server error'
        }


    }
}
