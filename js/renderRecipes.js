import Recipes from "./screen/allRecipes.js";
import {searchOnPage} from "./models/search.js"

let $navListPosts = document.querySelector('.nav-listPosts');
let $dropdown = document.querySelector('.dropdown');
$dropdown.classList.add('link-active');
$navListPosts.classList.add('link-bg-active');

let _recipes = new Recipes();
let $display = document.querySelector('.display');
$display.append(...await _recipes.render());
searchOnPage()