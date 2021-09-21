import BaseComponent from "../components/BaseComponent.js";

export default class ListPostsUser extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = [];
	}

	render = async () => {
		let arr = [];
		await db.collection('Post').get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				this.state.push(doc.data())
				arr.push(doc.id)
			})
		})
		let postItem = this.state.map((item, index) => {
			let $container = document.createElement('div');
			$container.classList.add('content__items');

			let $imgItem = document.createElement('div');
			$imgItem.classList.add('img-item');

			let $imgFace = document.createElement('img');
			$imgFace.src = item.linkImgFood;
			$imgFace.alt = `Ảnh minh họa`;

			$imgItem.append($imgFace)

			let $paraItems = document.createElement('div');
			$paraItems.classList.add('para-items');

			let $itemInfo = document.createElement('div');
			$itemInfo.classList.add('item-info')

			let $titlePara = document.createElement('h3');
			$titlePara.innerHTML = item.nameFood;
			let $subTitlePara = document.createElement('p');
			$subTitlePara.innerHTML = item.desciptionFood;
			let $author = document.createElement('p');
			$author.innerHTML = 'Người viết: ' + item.author;
			let $dateModifier = document.createElement('p');
			$dateModifier.innerHTML = item.dateModifier;
			let $linkDetail = document.createElement('a');
			$linkDetail.href = '#';
			$linkDetail.innerHTML = 'Xem chi tiết';
			$linkDetail.classList.add('details')
			$linkDetail.addEventListener('click', function (e) {
				e.preventDefault();
				console.log(arr[index])
				localStorage.setItem('idFood', JSON.stringify(arr[index]));
				window.location.href = './detail.html'
			})

			$itemInfo.append($titlePara, $subTitlePara, $author, $dateModifier, $linkDetail)

			let $itemComment = document.createElement('div');
			$itemComment.classList.add('item-comment');
			$itemComment.innerHTML = `
				<label for="like" class="item"><i class="far fa-heart"></i> <span class="number-like">0</span></label>
				<input type="checkbox" id="like" class="item">
				<span id="comment" class="item"><i class="fas fa-comments"></i><span class="number-like">0</span></span>
				 <span id="view" class="item"><i class="fas fa-eye"></i><span class="number-like">0</span></span>`

			$paraItems.append($itemInfo, $itemComment);

			$container.append($imgItem, $paraItems)

			return $container
		})
		return postItem

	}

}

// 		let $contentItem = document.createElement('div');
// 		$contentItem.classList.add('content__items');
// 		$contentItem.innerHTML = `
// 				<div class="img-item">
// 					<img src="${item.image}" alt="img">
// 				</div>
// 				<div class="para-items">
// 					<div class="item-info">
// 						<h3>${item.title}</h3>
// 						<p>${item.subTitle}</p>
// 						<a href="#" class="details">Xem chi tiết</a>
// 					</div>
// 					<div class="item-comment">
// 						<label for="like" class="item"><i class="far fa-heart"></i> <span class="number-like">0</span></label>
// 						<input type="checkbox" id="like" class="item">
// 						<span id="comment" class="item"><i class="fas fa-comments"></i><span class="number-like">0</span></span>
// 						<span id="view" class="item"><i class="fas fa-eye"></i><span class="number-like">0</span></span>
// 					</div>
// 				</div>














