export default function createRecipeCardResults(arr) {
    const recipeList = document.getElementById("recipe-card-list")

    recipeList.innerHTML = ""

    arr.map((item) => {
        const recipeUri = item.recipe.uri
        const recipeId = recipeUri.split("_")[1]
        
        recipeList.innerHTML += `                      
                <li class="result-card-wrapper general-card-style">
                <a href="/src/pages/recipe-page.html?id=${recipeId}">
                    <img class="recipe-card-img" src="${item.recipe.image}" alt="${item.recipe.label}">
                    <div class="recipe-card-text-wrapper">
                        <p>${item.recipe.label}</p>
                        <div class="space-between-wrap-recipe-cards">
                            <span> ${Math.round(item.recipe.calories)} Calories | ${item.recipe.ingredients.length} ingredients</span>
                            <div class="time-icon-recipe-card"></div><span>${item.recipe.totalTime}  min.</span>
                        </div>
                    </div>
                </a>
                </li>                
            `
    })
}
