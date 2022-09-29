import axios from "axios";
import createTable from "./createTableProductAmount";
import calculateServing from "./calculateServing";

export let productNameTest = ""
export default async function fetchCaloriesData( ingredient){
    // values for API
    const URI = "https://api.edamam.com"
    const ENDPOINT = "/api/food-database/v2/parser"
    const API_ID = "0daed655"
    const API_KEY = "3ba192721767a0c9f812f27900774f05"
    const data = document.getElementById("product-output")

    try {

        const response = await axios.get(URI + ENDPOINT,{
            params: {
                app_id: API_ID,
                app_key: API_KEY,
                ingr: ingredient
            }
        })

        const arrayOfingredient = response.data.hints[0]
        const productName = arrayOfingredient.food.label
        const productWeight = arrayOfingredient.measures[0].weight
        const productCalories = arrayOfingredient.food.nutrients.ENERC_KCAL
        const fat = arrayOfingredient.food.nutrients.FAT
        const carbs = arrayOfingredient.food.nutrients.CHOCDF



    createTable(productName, productWeight,"Gram")
    function idk (){
            productNameTest = productName
    }
idk()
        console.log(productNameTest)



    }
    catch (e) {
        const error = document.getElementById("error-message")

        if (e.response.status === 404) {
            error.innerText = 'page not found'
        } else if (e.response.status === 500) {
            error.innerText = 'internal server error'
        }


    }
}
