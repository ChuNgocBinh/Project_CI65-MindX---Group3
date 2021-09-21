import DetailFood from "./screen/detailFood.js";
let _detailsFood = new DetailFood()
let $master = document.querySelector('.master');
$master.append(...await _detailsFood.render())