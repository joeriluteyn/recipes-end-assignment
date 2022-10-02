Welcome to the instruction Manual for the Website The Clueless Cook

---------------------------------------
Introduction 

This application has 3 different pages :
1. The homepage
2. The recipe page
3. The calories calculator page
-----
The homepage:

On the homepage there are 2 main functions:

1. At the top there are 3 random generated recipe cards.

2. In the middle of the page there is a search bar where the user can input different ingredients, and has different options to specify the recipe. The user can specify Meal type, Cuisine, Diet and Time. When submitted, 20 Recipe cards are generated based on the search options.

When clicked on one of these recipe cards you are linked to The recipe page.

------
The recipe page

The main function of this page is to display the information about the recipe which includes all the ingredients, Health labels and the nutrition values.

-----

The calories calculator page

On the calories calculator page there is a search input field where a product or barcode can be inputted. This search will output the amount of 1 serving of the searched product.
In the serving bar the user can input the amount of servings. The output of this search will be the calories, fat and carbs of the specified product.
Multiple products can be added to this table. The sum of the total calories will be shown in the last table.

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
6. Type "npm install" and press enter


------

Instructions for creating API IDs and API keys

1. Make an account on [Edamam](https://www.edamam.com/)
2. log in on the website
3. Click the accounts tab in the navigation bar and then GO to dashboard
![accounts]( Assets/images/screenshot-accounts.png?raw=true)
![accounts]( Assets/images/dashboard.png?raw=true)
4. Go to the second tab "Applications"
5. Press "Create new application" at top right
6. First we make an "Recipe name Api"
7. Put in A name and a description For example "recipe api" and "recipe api" and "create application"
8. Save the Application ID and Application Key
9. Go to the Files fetchRecipeData.js and recipePageFetchRecipeData.js

   [fetchRecipeData](functions/fetchRecipeData.js)

   [recipePageFetchRecipeData](functions/recipePageFetchRecipeData.js)
10. Insert your Application ID between the "" in const API_ID = " "
11. Insert your Application Key between the "" const API_key= " "

    ![accounts]( Assets/images/insert-key-screenshot.png?raw=true)

12. We go back to Applications from step 3 Create new application
13. Now we make a "Food Database Api"
14. Save the Application ID and Application key again
15. Insert these into:

[fetchCaloriesData](functions/fetchCaloriesData.js)

[fetchCaloriesFatCarbsData](functions/fetchCaloriesFatCarbsData.js)

-------

To run the applications:

Type : "npm run start" in de terminal press enter and click the link given there


