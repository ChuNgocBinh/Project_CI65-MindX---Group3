import BaseComponent from "./BaseComponent.js";
import { getCurrentUser } from "../models/user.js";
export default class Navbar extends BaseComponent {
	constructor(props) {
		super(props);
	}
	render() {
		let nav = document.createElement('div');
		nav.classList.add('navbar');
		nav.innerHTML = `
                <div class="logo-img">
					<img src="./img/Image-1-Copy-1024x629.png" alt="logo">
				</div>
				<div class="nav-link">
					<ul class="nav">
						<li class="nav-item link-active"><a href="./home.html">Trang chủ</a></li>
						<li class="nav-item dropdown"><a href="#">Công thức <i class="fas fa-angle-down"></i></a>
							<ul class="sub-nav">
								<li class ="sub-nav-item"><a href="./createPost.html">Tạo món ăn</a></li>
								<li class ="sub-nav-item"><a href="./listPosts.html">Các món ăn đã thêm</a></li>
								<li class ="sub-nav-item"><a href="./allRecipes.html">Danh sách món ăn</a></li>
							</ul>
						</li>
						<li class="nav-item"><a href="#">Món ăn ưa thích</a></li>
						<li class="nav-item"><a href="#">Giới thiệu</a></li>
						<li class="nav-item"><a href="./allRecipes.html">Liên hệ</a></li>
					</ul>
				</div>
				<div class="nav-search">
					<div class="input-search">
						<input type="search" placeholder="Search..." id="search">
						<button class="btn-search"><i class="fas fa-search"></i></button>
					</div>
					<div class="link-login">
						<a href="./signIn.html">Đăng nhập</a>
					</div>
				</div>
                `
		return nav
	}

	async handleNameUser() {
		let nameUser = await getCurrentUser();
		let nameDisplay = document.querySelector('.link-login') ;
		nameDisplay.innerHTML = nameUser
	}

	handleClickNav() {
		let navLink = document.querySelectorAll('.nav-item');
		Array.from(navLink).forEach(nav => {
			nav.onclick = function (e) {
				// e.preventDefault();
				let linkActive = document.querySelector('.nav-item.link-active');
				nav.classList.add('link-active');
				linkActive.classList.remove('link-active');
			}
		});
	}
}

