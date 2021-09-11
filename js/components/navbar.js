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
						<li class="link-active"><a href="#">Trang chủ</a></li>
						<li class="dropdown"><a href="#">Công thức <i class="fas fa-angle-down"></i></a>
							<ul class="sub-nav">
								<li><a href="./createPost.html">Tạo món ăn</a></li>
								<li><a href="#">Các món ăn đã thêm</a></li>
								<li><a href="#">Danh sách món ăn</a></li>
							</ul>
						</li>
						<li><a href="#">Món ăn ưa thích</a></li>
						<li><a href="#">Giới thiệu</a></li>
						<li><a href="#">Liên hệ</a></li>
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

	async handleNameUser(){
		auth.currentUser;
		let NameLogin = document.querySelector('.link-login')
		await getCurrentUser()
		// if(nameUser !== null){
			// NameLogin.innerHTML = nameUser.displayName
		// }
	}
}

