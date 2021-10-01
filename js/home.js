import Posts from "./screen/parascreen.js";


let $navHome = document.querySelector('.nav-home');
$navHome.classList.add('link-active');
$navHome.classList.add('link-bg-active');

let _posts = new Posts();
let $recipes = document.querySelector('.recipes');
$recipes.append(...await _posts.render());


