export default function createTable (product, quantity, label){
    const productInfo = document.getElementById("product-output")
    productInfo.innerHTML = ""
    productInfo.innerHTML = `
            <td id="productNameInTable">${product}</td>
            <td>${quantity}</td>
            <td>${label}</td>
            `
}