import ListPostsUser from "./screen/listPosts.js";

let _listPostsUser =  new ListPostsUser()
let $master = document.querySelector('.master');
$master.append(...await _listPostsUser.render())