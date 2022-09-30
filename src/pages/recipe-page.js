import recipePageFetchRecipeData from "../functions/recipePageFetchRecipeData";

// event listener that activates when page is loaded and gets id from url
document.addEventListener('DOMContentLoaded', (event)=>{
    event.preventDefault()
    const parameters = new URLSearchParams(window.location.search)
    const id = parameters.get("id")
    recipePageFetchRecipeData(id)

})



// activate function with given parameter
recipePageFetchRecipeData( "4806c57d4d2f0617050247e9782c19e1")