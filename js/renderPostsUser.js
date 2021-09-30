import data from "./data/data.js";
import ListPostsUserAdded from "./screen/postUserAdded.js";


let $navPostAdded = document.querySelector('.nav-postAdded');
let $dropdown = document.querySelector('.dropdown');
$dropdown.classList.add('link-active');
$navPostAdded.classList.add('link-bg-active');

let _listPostsUserAdded =  new ListPostsUserAdded()
let $master = document.querySelector('.master');
$master.append(...await _listPostsUserAdded.render())


// console.log(...data)
// data.forEach(item=>{
// 	db.collection('Post').add(item)

// })
