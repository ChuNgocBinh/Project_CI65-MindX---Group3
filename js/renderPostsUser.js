import ListPostsUserAdded from "./screen/postUserAdded.js";

let _listPostsUserAdded =  new ListPostsUserAdded()
let $master = document.querySelector('.master');
$master.append(...await _listPostsUserAdded.render())