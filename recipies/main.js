// imports
import recipes  from './recipies.mjs';
import { recipeTemplate } from './templates.mjs';

// random number based off of number of array items
function getRandomRecipe(recipes) {
    var randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
}

// create recipe html from a given list
function renderRecipes(recipeList) {
    var recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = ''; 
    
    recipeList.forEach(recipe => {
        recipeContainer.innerHTML += recipeTemplate(recipe);
    });
}

// filters recipes by keywords from the search
function filterRecipes(query) {
    query = query.toLowerCase();
    return recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(query) ||
               recipe.description.toLowerCase().includes(query) ||
               recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
               recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query));
    }).sort((a, b) => a.name.localeCompare(b.name));
}

// handles the search
function searchHandler(event) {
    event.preventDefault(); 
    const query = document.getElementById('search-bar').value.trim();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}


// runs the random function when the program starts and hold the event listener for the search bar
function init() {
    const randomRecipe = getRandomRecipe(recipes);
    renderRecipes([randomRecipe]);

    const search = document.getElementById('search-form');
    search.addEventListener('submit', searchHandler);
}
init();