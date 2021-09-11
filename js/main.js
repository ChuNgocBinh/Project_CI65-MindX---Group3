import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Posts from "./screen/parascreen.js";
import Featured from "./screen/featured.js"

let _navbar = new Navbar();
let $navbar = document.querySelector('.header');
$navbar.append(_navbar.render());
_navbar.handleNameUser()

let _footer = new Footer();
let $footer = document.querySelector('footer');
$footer.append(_footer.render());

let _posts = new Posts();
let $main = document.querySelector('.main');
$main.append(..._posts.render());

let _featured = new Featured();
let $featured = document.querySelector('.featured');
$featured.append(_featured.render());






// let btn = document.getElementById('nhap')
// let input = document.getElementById('nhaptext')

db.collection("nam").add({
    name: 'vu',
    age: 25,
    gender: 'Female'
})
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });