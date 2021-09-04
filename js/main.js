import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

let _navbar = new Navbar();
let $navbar = document.querySelector('.navbar');
$navbar.append(_navbar.render());

let _footer = new Footer();
let $footer = document.querySelector('footer');
$footer.append(_footer.render());
