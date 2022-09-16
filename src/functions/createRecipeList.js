export default function createRecipeList ( arr ) {
    const recipeList = document.getElementById("recipe-card-list")
    recipeList.innerHTML = ""
    arr.map(( item ) => {
        recipeList.innerHTML += `
                <li> 
                    <h3>${item.recipe.label}</h3>
                    <img src="${item.recipe.image}">
                </li>
            `
    })
}