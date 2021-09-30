import EditFood from "./screen/editFood.js";


let $main = document.querySelector('.main');

let _editFood = new EditFood()
$main.append(await _editFood.render())