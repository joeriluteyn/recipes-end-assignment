Welcome to the instruction Manual for the Website The Clueless Cook

---------------------------------------
Introduction 

This application has 3 different pages :
1. The homepage
2. The recipe page
3. the calories calculator

On the homepage there are 2 main functions:

At the top there are 3 random generated recipe cards.

In the middle of the page there is a search bar where the user can input different ingredients, and have different options to specify the recipe. The user can specify Mealtype, Cuisine, Diet and Time. When submitted, 20 Recipe cards are generated based on the search options.

When clicked on one of these recipe cards you are linked to The recipe page.

The main function of this page is the information displayed about the recipe which includes all the ingredients, Health labels and the nutrition values.

On The calories calculator page there is a search input field where a product or barcode can be inputted to search for an ingredient or product. This search will output the amount of 1 serving of the searched product.
In the serving bar u can input the amount of servings, where the output will be the calories, fat and carbs of specified product.
Multiple products can be added to this table. The Sum of the total calories will be shown in the last Table.

![accounts]( Assets/images/main-page-screenshot.png?raw=true)

--------------------
Necessary items to run application 

- API key and Application ID (instructions are bellow)
- Webstorm

--------

Instructions for opening in webstorm

1. Open webstorm 
2. Create new project and give it a name
3. Drag the contents of the folder end-assignment-recipe-website into the top directory you just named
4. Open this readme file there and continue there
5. Open the terminal at the bottom
6. Type "npm install"


------

Instructions for creating API IDs and API keys

1. Make an account on [Edamam](https://www.edamam.com/)
2. Go to dashboard, click the accounts tab in the navigation bar and then GO to dashboard
![accounts]( Assets/images/screenshot-accounts.png?raw=true)
![accounts]( Assets/images/dashboard.png?raw=true)
3. Go to the second tab "Applications"
4. Press "Create new application" at top right
5. First we make an "Recipe name Api"
6. Put in A name and a description For example "recipe api" and "recipe api" and "create application"
7. Save the Application ID and Application Key
8. Go to the Files fetchRecipeData.js and recipePageFetchRecipeData.js

   [fetchRecipeData](functions/fetchRecipeData.js)

   [recipePageFetchRecipeData](functions/recipePageFetchRecipeData.js)
9. Insert your Application ID between the "" in const API_ID = " "
10. Insert your Application Key between the "" const API_key= " "

    ![accounts]( Assets/images/insert-key-screenshot.png?raw=true)

11. We go back to Applications from step 3 Create new application
12. Now we make a "Food Database Api"
13. Save the Application ID and Application key again
14. Insert these into:

[fetchCaloriesData](functions/fetchCaloriesData.js)

[fetchCaloriesFatCarbsData](functions/fetchCaloriesFatCarbsData.js)

-------

To run the applications:

Type : npm run start in de terminal and click the link given there


