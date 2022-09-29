
let caloriesSum = 0
let fatSum = 0
let carbSum = 0

export default function calculateServing(serving, productName, calories, fat, carbs) {
    const calculateProductInfo = document.getElementById("calculate-serving-output")
    const caloriesRounded = Math.round(calories * serving * 100) / 100
    const fatRounded = Math.round(fat * serving * 100) / 100
    const carbsRounded = Math.round(carbs * serving * 100) / 100

    calculateProductInfo.innerHTML += `
            <td>${productName}</td>
            <td>${caloriesRounded} kcal</td>
            <td>${fatRounded} g</td>
            <td>${carbsRounded} g</td>
    `

    function addSum (){
        caloriesSum = caloriesSum + caloriesRounded
        fatSum = fatSum + fatRounded
        carbSum = carbSum + carbsRounded
    }

    addSum()
    console.log(caloriesSum, fatSum, carbSum)
    const calculateTotal = document.getElementById("total-output-calories-and-serving-search")

    const caloriesSumRounded = Math.round( caloriesSum* 100) / 100
    const fatSumRounded = Math.round( fatSum * 100) / 100
    const carbSumRounded = Math.round( carbSum * 100) / 100


    calculateTotal.innerHTML = `
    <td>Total</td>
    <td>${caloriesSumRounded} kcal</td>
    <td>${fatSumRounded} g</td>
    <td>${carbSumRounded} g</td>
    
    
    `

}