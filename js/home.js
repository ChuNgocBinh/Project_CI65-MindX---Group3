import Posts from "./screen/parascreen.js";



let _posts = new Posts();
let $recipes = document.querySelector('.recipes');
$recipes.append(...await _posts.render());


