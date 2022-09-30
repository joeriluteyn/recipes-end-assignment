import fetchCaloriesData from "../functions/fetchCaloriesData";
import createTable from "../functions/createTableProductAmount";
import calculateServing from "../functions/calculateServing";
import fetchCaloriesFatCarbsData from "../functions/fetchCaloriesFatCarbsData";
import {productNameTest} from "../functions/fetchCaloriesData";


const productSubmitForm = document.getElementById("caloriesOnSubmit")
const product = document.getElementById("calories-search-field")

productSubmitForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    fetchCaloriesData(
        product.value,
    )
})



const servingButton = document.getElementById("add-button")
const serving = document.getElementById("serving-amount-field")

servingButton.addEventListener("click", (e) => {
    e.preventDefault()
    fetchCaloriesFatCarbsData(
        productNameTest,
        serving.value
    )


})


