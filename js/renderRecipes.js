import Recipes from "./screen/allRecipes.js";

let _recipes = new Recipes();
let $display = document.querySelector('.display');
$display.append(..._recipes.render()); 