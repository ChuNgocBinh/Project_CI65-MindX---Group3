import data from "./data/data.js";
import ListPostsUserAdded from "./screen/postUserAdded.js";

let _listPostsUserAdded =  new ListPostsUserAdded()
let $master = document.querySelector('.master');
$master.append(...await _listPostsUserAdded.render())


// console.log(...data)
// data.forEach(item=>{
// 	db.collection('Post').add(item)

// })
