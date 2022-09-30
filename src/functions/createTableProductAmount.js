//function to inject data from fetchCalorieData into html

export default function createTable (product, quantity, label){
    // get element from html to be injected
    const productInfo = document.getElementById("product-output")
    // function to empty if called upon again
    productInfo.innerHTML = ""
    // inject product info
    productInfo.innerHTML = `
            <td id="productNameInTable">${product}</td>
            <td>${quantity}</td>
            <td>${label}</td>
            `
}