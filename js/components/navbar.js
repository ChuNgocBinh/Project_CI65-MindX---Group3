import BaseComponent from "./BaseComponent.js";
import { search } from "../models/search.js";
export default class Navbar extends BaseComponent {
	constructor(props) {
		super(props);
	}
	render() {
		let $logo = document.createElement('div');
		$logo.classList.add('logo-img');
		$logo.innerHTML = `<img src="./img/Image-1-Copy-1024x629.png" alt="logo">`

		let $navLink = document.createElement('div');
		$navLink.classList.add('nav-link');

		let $close = document.createElement('div');
		$close.classList.add('close');
		$close.innerHTML = `<i class="fas fa-times"></i>`
		$close.onclick = ()=>{
			$navLink.style.transform = 'translateX(-50vw)'
			$navLink.style.transition = '0.3s linear'
		}

		let $navUl = document.createElement('ul');
		$navUl.classList.add('nav');
		$navUl.innerHTML = `
						<li class="nav-item nav-padding nav-home"><div class = "icon-nav"><i class="fas fa-home"></i></div><a href="./index.html">Trang chủ</a></li>
						<li class="nav-item dropdown"><a href="#">Công thức <i class="fas fa-angle-down"></i></a>
							<ul class="sub-nav">
								<li class ="sub-nav-item nav-create "><div class = "icon-nav"><i class="fas fa-plus-circle"></i></div><a href="./createPost.html">Tạo món ăn</a></li>
								<li class ="sub-nav-item nav-postAdded"><div class = "icon-nav"><i class="fas fa-bookmark"></i></div><a href="./listPosts.html">Các món ăn đã thêm</a></li>
								<li class ="sub-nav-item nav-listPosts"><div class = "icon-nav"><i class="fas fa-list"></i></div><a href="./allRecipes.html">Danh sách món ăn</a></li>
								<li class ="sub-nav-item nav-favorite"><div class = "icon-nav"><i class="fas fa-thumbs-up"></i></div><a href="./favoriteFood.html">Món ăn ưa thích</a></li>
							</ul>
						</li>
						<li class="nav-item nav-padding nav-introduce"><div class = "icon-nav"><i class="fas fa-users"></i></div><a href="./Introduce.html">Giới thiệu</a></li>
						<li class="nav-item nav-padding nav-contact"><div class = "icon-nav"><i class="fas fa-phone"></i></div><a href="./Contact.html">Liên hệ</a></li>
						`
		$navLink.append($close,$navUl)
			
		let $inputSearch = document.createElement('div');
		$inputSearch.classList.add('input-search');
		let $search = document.createElement('input');
		$search.type = "search";
		$search.placeholder = "Tìm kiếm..."
		$search.id = "search";
		$search.addEventListener("keyup", function (e) {
			if (e.key === "Enter") {
				search($search.value)
			}
		});
		let $btnSearch = document.createElement('button');
		$btnSearch.class = "btn-search";
		$btnSearch.addEventListener("click", function () {
			if (!($search.value == "" || $search.value === null)) {
				search($search.value)
			}
		});
		$btnSearch.innerHTML = `
			<i class="fas fa-search"></i>
			`
		$inputSearch.append($search, $btnSearch);
		let $linkLogin = document.createElement('div');
		$linkLogin.classList.add('link-login');
		// $linkLogin.innerHTML = "Đăng nhập";
		this.handleNameUser($linkLogin);

		let $navSearch = document.createElement('div');
		$navSearch.classList.add('nav-search');
		$navSearch.append($inputSearch, $linkLogin)

		let $nav = document.createElement('div');
		$nav.classList.add('navbar');

		let $bars = document.createElement('div');
		$bars.classList.add('bars');
		$bars.innerHTML = `<i class="fas fa-bars"></i>`
		$bars.onclick = () => {
			$navLink.style.transform = 'translateX(0)'
			$navLink.style.transition = '0.3s linear'
		}

		$nav.append($bars, $logo, $navLink, $navSearch)


		return $nav
	}

	async handleNameUser($linkLogin) {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				let nameDisplay = await auth.currentUser.displayName
				if (nameDisplay !== null) {
					let $nameUser = document.createElement('div');
					$nameUser.classList.add('nameUser');
					$nameUser.innerHTML = `${nameDisplay} <i class="fas fa-angle-down"></i>`

					let $logOutUser = document.createElement('div');
					$logOutUser.className = 'logOutUser logout-hiden';

					let $linkProfile = document.createElement('a');
					$linkProfile.href = '#';
					$linkProfile.innerHTML = 'Profile';

					let $linkLogOut = document.createElement('a');
					$linkLogOut.href = '#';
					$linkLogOut.innerHTML = 'Đăng xuất';
					$linkLogOut.onclick = this.handleClickLogOut

					$logOutUser.append($linkProfile, $linkLogOut)

					$linkLogin.append($nameUser, $logOutUser)
				}
			} else {
				// User is signed out
				$linkLogin.innerHTML = `<a href="./signIn.html">Đăng nhập</a>`;
			}
		});
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

	handleClickLogOut = async (e) => {
		e.preventDefault();
		await auth.signOut()
		window.location.href = './signIn.html'
	}

	
}

