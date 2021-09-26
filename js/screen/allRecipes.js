import BaseComponent from "../components/BaseComponent.js";
import { search } from "../models/search.js";
import { updateInteract } from "../models/postFireBase.js";

export default class Recipes extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = []
	}

	async render() {
		let arr = [];
		await db.collection("Post").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				this.state.push(doc.data());
				arr.push(doc.id);
			});
		})
		let $search = document.createElement('input');
		$search.type="search";
		$search.placeholder="Search..."
		$search.id = "searchAYT";
		$search.addEventListener("keyup", function(e){
				search($search.value)
		});
		document.querySelector(".container .search-container").appendChild($search);
		let postItem = this.state.map((item, index) => {
			let $container = document.createElement('div');
			$container.classList.add('card', 'searchTarget');
			
			let $imgItem = document.createElement('div');
			$imgItem.classList.add('card-img');

			$imgItem.addEventListener('click', async function (e) {
				e.preventDefault();
				console.log(arr[index])
				localStorage.setItem('idFood', JSON.stringify(arr[index]));


				let numberView = item.numberView;
				let collection = 'Post'
				await updateInteract(collection, arr[index], { numberView: numberView += 1 })

				window.location.href = './detail.html'
			})

			let $imgFace = document.createElement('img');
			$imgFace.src = item.linkImgFood;
			$imgFace.alt = `Ảnh minh họa`;
			$imgFace.classList.add('card-img');


			$imgItem.append($imgFace)

			let $cardContent = document.createElement('div');
			$cardContent.classList.add('card-content');

			let $cardInfo = document.createElement('div');
			$cardInfo.classList.add('card-info')

			$cardInfo.addEventListener('click', async function (e) {
				e.preventDefault();
				console.log(arr[index])
				localStorage.setItem('idFood', JSON.stringify(arr[index]));


				let numberView = item.numberView;
				let collection = 'Post'
				await updateInteract(collection, arr[index], { numberView: numberView += 1 })

				window.location.href = './detail.html'
			})

			let $titlePara = document.createElement('h3');
			$titlePara.innerHTML = item.nameFood;
			let $subTitlePara = document.createElement('p');
			$subTitlePara.innerHTML = item.desciptionFood;
			let $author = document.createElement('p');
			$author.classList.add("author");
			$author.innerHTML = 'Người viết: ' + item.author;
			let $dateModifier = document.createElement('p');
			$dateModifier.innerHTML = item.dateModifier;

			$cardInfo.append(
				$titlePara,
				$subTitlePara,
				$author,
				$dateModifier,
			)

			let $cardComment = document.createElement('div');
			$cardComment.classList.add('item-comment');

			let $labelLike = document.createElement('label');
			$labelLike.classList.add('item');
			$labelLike.innerHTML = `<i class="fas fa-thumbs-up"></i> <span class="number-like"> ${item.numberLike}</span>`;
			$labelLike.onclick = async function () {
				await auth.onAuthStateChanged(async (user) => {
					if (user) {
						let emailUser = auth.currentUser.email;
						let collection = 'Post'
						let numberLike = item.numberLike;
						if (item.memberLike.includes(emailUser) == false) {
							await updateInteract(collection, arr[index], {
								memberLike: firebase.firestore.FieldValue.arrayUnion(emailUser)
							})
							$labelLike.innerHTML = `<i class="fas fa-thumbs-up"></i> <span class="number-like"> ${item.numberLike + 1}</span>`;
							await updateInteract(collection, arr[index], { numberLike: numberLike += 1 })
							$labelLike.classList.add('liked');
							alert('Lưu thành công món ăn vào danh sách yêu thích của bạn');
						} else {
							await updateInteract(collection, arr[index], {
								memberLike: firebase.firestore.FieldValue.arrayRemove(emailUser)
							})
							$labelLike.innerHTML = `<i class="fas fa-thumbs-up"></i> <span class="number-like"> ${item.numberLike - 1}</span>`;
							await updateInteract(collection, arr[index], { numberLike: numberLike -= 1 })
							$labelLike.classList.remove('liked');
							alert('Xóa món ăn khỏi danh sách yêu thích thành công');
						}
					}
				})
			}

			 auth.onAuthStateChanged(async (user) => {
				if (user) {
					let emailUser = auth.currentUser.email;
					if (item.memberLike.includes(emailUser) == true) {
						$labelLike.classList.add('liked');
					} else {
						$labelLike.classList.remove('liked');
					}
				}
			})



			let $spanComment = document.createElement('span');
			$spanComment.id = 'comment';
			$spanComment.classList.add('item');
			$spanComment.innerHTML = `<i class="fas fa-comments"></i><span class="number-comment"> ${item.comment.length}</span>`;

			let $spanView = document.createElement('span');
			$spanView.id = 'view';
			$spanView.classList.add('item');
			$spanView.innerHTML = `<i class="fas fa-eye"></i><span class="number-view"> ${item.numberView}</span>`;

			$cardComment.append($labelLike, $spanComment, $spanView)

			$cardContent.append($cardInfo, $cardComment);

			$container.append($imgItem, $cardContent)

			return $container
		})





        //     let $contentItem = document.createElement('div');
		// 	$contentItem.classList.add('card', 'searchTarget');
		// 	$contentItem.addEventListener('click', function (e) {
		// 		e.preventDefault();
		// 		console.log(arr[index])
		// 		localStorage.setItem('idFood', JSON.stringify(arr[index]));
		// 		window.location.href = './detail.html'
		// 	})
        //     $contentItem.innerHTML = `
		// 		<img class="card-img" src="${item.linkImgFood}" alt="img">
		// 		<div class="card-content">
		// 			<div class="card-info">
		// 				<h3>${item.nameFood}</h3>
		// 				<div class="card-description">${item.desciptionFood}</div>
		// 			</div>
		// 			<div class="card-comment">
		// 				<p>Người viết: ${item.author}</p>
		// 				<label for="like" class="item"><i class="far fa-heart"></i> <span class="number-like">0</span></label>
		// 				<input type="checkbox" id="like" class="item">
		// 				<span id="comment" class="item"><i class="fas fa-comments"></i><span class="number-like">0</span></span>
		// 				<span id="view" class="item"><i class="fas fa-eye"></i><span class="number-like">0</span></span>
		// 			</div>
		// 		</div>
        //     `
		// 	return $contentItem
		// })
		return postItem








	}
}