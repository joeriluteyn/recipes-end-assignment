export default function createRandomCards(arr) {
    const randomCards = document.getElementById("random-recipe-card-list")
    randomCards.innerHTML = ""
    arr.slice(0, 3).map((item) => {
        const recipeUri = item.recipe.uri
        const recipeId = recipeUri.split("_")[1]

        randomCards.innerHTML += `
        <li class="random-card-wrapper general-card-style">
            <a href="recipe-page.html?id=${recipeId}">
                <img class="recipe-card-img" src="${item.recipe.image}" alt="${item.recipe.label}">
                <div class="recipe-card-text-wrapper random-card-text-wrapper">
                    <p>${item.recipe.label}</p>
                    <div class="space-between-wrap-recipe-cards">
                        <span> ${Math.round(item.recipe.calories)} Calories | ${item.recipe.ingredients.length} ingredients</span>
                    <div class="time-icon-recipe-card"></div><span>${item.recipe.totalTime}  min.</span>
                    </div>
                </div>
            </a>
        </li>
        `
        randomCards.innerHTML += `
        
        `
    })

}


