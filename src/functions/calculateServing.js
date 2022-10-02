
// Variables to calculate the total of set variable
import mathRound from "./mathRoundDecimals";
import mathRoundDecimals from "./mathRoundDecimals";

let caloriesSum = 0
let fatSum = 0
let carbSum = 0

// Function where data from fetchCaloriesCarbData is being calculated
export default function calculateServing(serving, productName, calories, fat, carbs) {
    const calculateProductInfo = document.getElementById("calculate-serving-output")

    // Math to get 2 decimals after the number
    const caloriesRounded = mathRoundDecimals(calories * serving)
    const fatRounded = mathRoundDecimals(fat * serving)
    const carbsRounded = mathRoundDecimals(carbs * serving)
// Inject the data into HTML
    calculateProductInfo.innerHTML += `
            <td>${productName}</td>
            <td>${caloriesRounded} kcal</td>
            <td>${fatRounded} g</td>
            <td>${carbsRounded} g</td>
    `

    // function to calculate total of set variable
    function addSum (){
        caloriesSum = caloriesSum + caloriesRounded
        fatSum = fatSum + fatRounded
        carbSum = carbSum + carbsRounded
    }
// activate function
    addSum()

    const calculateTotal = document.getElementById("total-output-calories-and-serving-search")

    // to round again
    const caloriesSumRounded = mathRoundDecimals( caloriesSum)
    const fatSumRounded = mathRoundDecimals( fatSum)
    const carbSumRounded = mathRoundDecimals( carbSum)

// inject total into HTML
    calculateTotal.innerHTML = `
    <td>Total</td>
    <td>${caloriesSumRounded} kcal</td>
    <td>${fatSumRounded} g</td>
    <td>${carbSumRounded} g</td>
    
    
    `

}