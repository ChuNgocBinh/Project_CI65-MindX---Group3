import CreatePosts from "./screen/createPost.js";

let $main = document.querySelector('.main');

let _CreatePost = new CreatePosts()
$main.append(_CreatePost.render())