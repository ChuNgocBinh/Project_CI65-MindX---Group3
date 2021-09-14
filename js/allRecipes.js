import Recipes from "./screen/allRecipes.js";
let _recipes = new Recipes();
let $display = document.querySelector('.display');
console.log("check")
$display.append(..._recipes.render()); 