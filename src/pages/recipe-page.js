import recipePageFetchRecipeData from "../functions/recipePageFetchRecipeData";

document.addEventListener('DOMContentLoaded', (event)=>{
    event.preventDefault()
    const parameters = new URLSearchParams(window.location.search)
    const id = parameters.get("id")
    console.log(id)
})

recipePageFetchRecipeData()