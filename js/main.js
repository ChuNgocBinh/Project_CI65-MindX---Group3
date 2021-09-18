import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Posts from "./screen/parascreen.js";
import Featured from "./screen/featured.js";
import CreatePosts from "./screen/createPost.js";

let _navbar = new Navbar();
let $navbar = document.querySelector('.header');
$navbar.append(_navbar.render());
// _navbar.handleClickNav();
// _navbar.handleNameUser;



let _footer = new Footer();
let $footer = document.querySelector('footer');
$footer.append(_footer.render());


