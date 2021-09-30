import CreatePosts from "./screen/createPost.js";

let $navCreate = document.querySelector('.nav-create');
let $dropdown = document.querySelector('.dropdown');
$dropdown.classList.add('link-active');
$navCreate.classList.add('link-bg-active');

let $main = document.querySelector('.main');
let _CreatePost = new CreatePosts()
$main.append(_CreatePost.render())