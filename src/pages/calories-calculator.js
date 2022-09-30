import fetchCaloriesData from "../functions/fetchCaloriesData";
import createTable from "../functions/createTableProductAmount";
import calculateServing from "../functions/calculateServing";
import fetchCaloriesFatCarbsData from "../functions/fetchCaloriesFatCarbsData";
import {productNameTest} from "../functions/fetchCaloriesData";

// Get elements from HTML to be injected with Javascript
const productSubmitForm = document.getElementById("caloriesOnSubmit")
const product = document.getElementById("calories-search-field")

// event listener, when search is submited fetchCaloriesData gets activated with the value of the search field
productSubmitForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    fetchCaloriesData(
        product.value,
    )
})

// Get elements from HTML to be injected with Javascript
const servingButton = document.getElementById("add-button")
const serving = document.getElementById("serving-amount-field")

// event listener, when button is clicked activates fetchCaloriesFatCarbsData with value of servings amount and the value of the product of createTable
servingButton.addEventListener("click", (e) => {
    e.preventDefault()
    fetchCaloriesFatCarbsData(
        productNameTest,
        serving.value
    )


})


