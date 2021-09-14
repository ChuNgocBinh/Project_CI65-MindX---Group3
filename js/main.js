import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

let _navbar = new Navbar();
let $navbar = document.querySelector('.header');
$navbar.append(_navbar.render());
_navbar.handleNameUser()

let _footer = new Footer();
let $footer = document.querySelector('footer');
$footer.append(_footer.render());







