export default function createRecipeList(arr) {
    const recipeList = document.getElementById("recipe-card-list")

    recipeList.innerHTML = ""

    arr.map((item) => {
        recipeList.innerHTML += `                      
                <li class="result-card-wrapper general-card-style">
                    <img src="${item.recipe.image}">
                    <div class="recipe-card-text-wrapper">
                        <p>${item.recipe.label}</p>
                        <div class="space-between-wrap-recipe-cards">
                            <span> ${Math.round(item.recipe.calories)} Calories | ${item.recipe.ingredients.length} ingredients</span>
                            <span><img class="time-icon" src="Assets/icons/time.svg" alt="time">${item.recipe.totalTime}  min.</span>
                        </div>
                    </div>
                </li>                
            `
    })
}

