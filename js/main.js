import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Posts from "./screen/parascreen.js";

let _navbar = new Navbar();
let $navbar = document.querySelector('.header');
$navbar.append(_navbar.render());

let _footer = new Footer();
let $footer = document.querySelector('footer');
$footer.append(_footer.render());

let _posts = new Posts();
let $main = document.querySelector('.main');
$main.append(..._posts.render())
console.log(_posts.render())