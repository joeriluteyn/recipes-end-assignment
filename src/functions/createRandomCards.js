export default function createRandomCards(arr) {
    const randomCards = document.getElementById("random-recipe-card-list")
    randomCards.innerHTML = ""
    arr.slice(0, 3).map((item) => {
        randomCards.innerHTML += `
        <li class="random-card-wrapper general-card-style">
            <img class="recipe-card-img" src="${item.recipe.image}">
            <div class="recipe-card-text-wrapper random-card-text-wrapper">
                <p>${item.recipe.label}</p>
                <div class="space-between-wrap-recipe-cards">
                    <span> ${Math.round(item.recipe.calories)} Calories | ${item.recipe.ingredients.length} ingredients</span>
                    <div class="time-icon-recipe-card"><span></div>${item.recipe.totalTime}  min.</span>
                </div>
            </div>
        </li>      
        `
    })

}

// <div className="cards-position-wrapper">
//     <div className="first-card-wrapper general-card-style">
//         <img src="Assets/images/hero-image.jpg" alt="">
//             <div className="recipe-card-text-wrapper">
//                 <p>${arr.recipe.label}</p>
//                 <div className="space-between-wrap-recipe-cards">
//                     <span>Calories | ingredients</span>
//                     <span><img className="time-icon" src="Assets/icons/time.svg" alt="time">  min.</span>
//                 </div>
//             </div>
//     </div>
//     <div className="second-card-wrapper general-card-style">
//         <img src="Assets/images/hero-image.jpg" alt="">
//             <div className="recipe-card-text-wrapper">
//                 <p>Recipe title</p>
//                 <div className="space-between-wrap-recipe-cards">
//                     <span>Calories | ingredients</span>
//                     <span><img className="time-icon" src="Assets/icons/time.svg" alt="time">  min.</span>
//                 </div>
//             </div>
//     </div>
//     <div className="third-card-wrapper general-card-style">
//         <img src="Assets/images/hero-image.jpg" alt="">
//             <div className="recipe-card-text-wrapper">
//                 <p>Recipe title</p>
//                 <div className="space-between-wrap-recipe-cards">
//                     <span>Calories | ingredients</span>
//                     <span><img className="time-icon" src="Assets/icons/time.svg" alt="time">  min.</span>
//                 </div>
//             </div>
//     </div>
// </div>