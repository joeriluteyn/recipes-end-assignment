import axios from "axios";
import createTable from "./createTableProductAmount";
import calculateServing from "./calculateServing";

// variable to remember productname for calculateServing
export let productNameTest = ""
// async function to get data from edamam API
export default async function fetchCaloriesData(ingredient) {
    // values for API
    const URI = "https://api.edamam.com"
    const ENDPOINT = "/api/food-database/v2/parser"
    const API_ID = "0daed655"
    const API_KEY = "3ba192721767a0c9f812f27900774f05"

// try block to get data from edamam API
    try {

        const response = await axios.get(URI + ENDPOINT, {
            // parameters to be given to API
            params: {
                app_id: API_ID, app_key: API_KEY, ingr: ingredient
            }
        })

        // variables to be given to createTable with path from API
        const arrayOfingredient = response.data.hints[0]
        const productName = arrayOfingredient.food.label
        const productWeight = arrayOfingredient.measures[0].weight

        // activate createTable with given parameters
        createTable(productName, productWeight, "Gram")

        // function to add product name to variable
        function rememberProductName() {
            productNameTest = productName
        }

        // activate function
        rememberProductName()


// catch errors and to give message
    } catch (e) {
        const error = document.getElementById("error-message")

        if (e.response.status === 404) {
            error.innerText = 'page not found'
        } else if (e.response.status === 500) {
            error.innerText = 'internal server error'
        }


    }
}
