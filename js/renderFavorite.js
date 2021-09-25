import FavoriteFood from "./screen/favoriteFood.js";

let _favoriteFood =  new FavoriteFood()
let $master = document.querySelector('.master');
$master.append(...await _favoriteFood.render())