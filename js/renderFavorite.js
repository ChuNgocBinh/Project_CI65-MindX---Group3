import FavoriteFood from "./screen/favoriteFood.js";

let $navFavorite = document.querySelector('.nav-favorite');
let $dropdown = document.querySelector('.dropdown');
$dropdown.classList.add('link-active');
$navFavorite.classList.add('link-bg-active');

let _favoriteFood =  new FavoriteFood()
let $master = document.querySelector('.master');
$master.append(...await _favoriteFood.render())