import BaseComponent from "../components/BaseComponent.js";

export default class ListPostsUser extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = [];
	}

	render = async () => {
		// let nameDisplay = await auth.currentUser.displayName;



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
			$linkDetail.addEventListener('click', async function (e) {
				e.preventDefault();
				console.log(arr[index])
				localStorage.setItem('idFood', JSON.stringify(arr[index]));

				let numberView = item.interact.numberView;
				await db.collection('Post').doc(arr[index]).update({
					interact: {
						numberComment: item.interact.numberComment,
						numberLike: item.interact.numberLike,
						numberView: numberView += 1
					}
				});
				window.location.href = './detail.html'
			})

			$itemInfo.append(
				$titlePara,
				$subTitlePara,
				$author,
				$dateModifier,
				$linkDetail
			)

			let $itemComment = document.createElement('div');
			$itemComment.classList.add('item-comment');
			let $lableLike = document.createElement('lable');
			$lableLike.attributes.for = 'like';
			$lableLike.classList.add('item');
			$lableLike.innerHTML = `<i class="fas fa-thumbs-up"></i> <span class="number-like"> ${item.interact.numberLike}</span>`;
			$lableLike.for = 'like'
			$lableLike.onclick = async function () {
				// if ($inputCheckLike.checked) {
					$lableLike.classList.add('checked');
					console.log('checked')
					let numberLike = item.interact.numberLike;
					await db.collection('Post').doc(arr[index]).update({
						interact: {
							numberComment: item.interact.numberComment,
							numberLike: numberLike += 1,
							numberView: item.interact.numberView
						}
					});
				// }
			}

			let $inputCheckLike = document.createElement('input');
			$inputCheckLike.type = 'checkbox';
			$inputCheckLike.id = 'like';
			$inputCheckLike.classList.add('item');


			let $spanComment = document.createElement('span');
			$spanComment.id = 'comment';
			$spanComment.classList.add('item');
			$spanComment.innerHTML = `<i class="fas fa-comments"></i><span class="number-comment"> ${item.comment.length}</span>`;

			let $spanView = document.createElement('span');
			$spanView.id = 'view';
			$spanView.classList.add('item');
			$spanView.innerHTML = `<i class="fas fa-eye"></i><span class="number-view"> ${item.interact.numberView}</span>`;

			$itemComment.append($lableLike, $inputCheckLike, $spanComment, $spanView)

			// $itemComment.innerHTML = `
			// 	<label for="like" class="item"><i class="far fa-heart"></i> <span class="number-like">0</span></label>
			// 	<input type="checkbox" id="like" class="item">
			// 	<span id="comment" class="item"><i class="fas fa-comments"></i><span class="number-comment">0</span></span>
			// 	<span id="view" class="item"><i class="fas fa-eye"></i><span class="number-like">0</span></span>`










			$paraItems.append($itemInfo, $itemComment);

			$container.append($imgItem, $paraItems)

			return $container
		})
		return postItem
	}
}














