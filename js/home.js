import Posts from "./screen/parascreen.js";
import Featured from "./screen/featured.js";

let _posts = new Posts();
let $main = document.querySelector('.main');
$main.append(..._posts.render());

let _featured = new Featured();
let $featured = document.querySelector('.featured');
$featured.append(_featured.render());