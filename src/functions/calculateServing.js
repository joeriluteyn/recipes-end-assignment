
// Variables to calculate the total of set variable
let caloriesSum = 0
let fatSum = 0
let carbSum = 0

// Function where data from fetchCaloriesCarbData is being calculated
export default function calculateServing(serving, productName, calories, fat, carbs) {
    const calculateProductInfo = document.getElementById("calculate-serving-output")

    // Math to get 2 decimals after the number
    const caloriesRounded = Math.round(calories * serving * 100) / 100
    const fatRounded = Math.round(fat * serving * 100) / 100
    const carbsRounded = Math.round(carbs * serving * 100) / 100
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
    const caloriesSumRounded = Math.round( caloriesSum* 100) / 100
    const fatSumRounded = Math.round( fatSum * 100) / 100
    const carbSumRounded = Math.round( carbSum * 100) / 100

// inject total into HTML
    calculateTotal.innerHTML = `
    <td>Total</td>
    <td>${caloriesSumRounded} kcal</td>
    <td>${fatSumRounded} g</td>
    <td>${carbSumRounded} g</td>
    
    
    `

}