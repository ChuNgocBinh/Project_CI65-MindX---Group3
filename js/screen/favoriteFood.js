import BaseComponent from "../components/BaseComponent.js";

export default class FavoriteFood extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = [];
    }

    render = async () => {
        await db.collection('Post').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.state.push(doc.data())
            })
        })
        console.log(this.state)

        let myFavorite = [];
        await auth.onAuthStateChanged(async (user) => {
            if (user) {
                let emailUser = auth.currentUser.email;
                console.log(emailUser)
                console.log(this.state)
                this.state.forEach(item => {
                    if (item.memberLike.includes(emailUser) == true) {
                        myFavorite.push(item)
                    }
                })
                console.log(myFavorite)
            }
        })
        console.log(myFavorite)
        let postItem = myFavorite.map((item, index) => {
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

				let numberView = item.numberView;
				let collection = 'Post'
				await updateInteract(collection, arr[index], { numberView: numberView += 1 })

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

			let $lableLike = document.createElement('label');
			$lableLike.classList.add('item');
			$lableLike.innerHTML = `<i class="fas fa-thumbs-up"></i> <span class="number-like"> ${item.numberLike}</span>`;
			$lableLike.onclick = async function () {
				await auth.onAuthStateChanged(async (user) => {
					if (user) {
						let emailUser = auth.currentUser.email;
						let collection = 'Post'
						let numberLike = item.numberLike;
						if (item.memberLike.includes(emailUser) == false) {
							await updateInteract(collection, arr[index], {
								memberLike: firebase.firestore.FieldValue.arrayUnion(emailUser)
							})
							$lableLike.innerHTML = `<i class="fas fa-thumbs-up"></i> <span class="number-like"> ${item.numberLike + 1}</span>`;
							await updateInteract(collection, arr[index], { numberLike: numberLike += 1 })
							$lableLike.classList.add('liked');
							alert('Lưu thành công món ăn vào danh sách yêu thích của bạn');
						} else {
							await updateInteract(collection, arr[index], {
								memberLike: firebase.firestore.FieldValue.arrayRemove(emailUser)
							})
							$lableLike.innerHTML = `<i class="fas fa-thumbs-up"></i> <span class="number-like"> ${item.numberLike - 1}</span>`;
							await updateInteract(collection, arr[index], { numberLike: numberLike -= 1 })
							$lableLike.classList.remove('liked');
							alert('Xóa món ăn khỏi danh sách yêu thích thành công');
						}
					}
				})
			}

			 auth.onAuthStateChanged(async (user) => {
				if (user) {
					let emailUser = auth.currentUser.email;
					if (item.memberLike.includes(emailUser) == true) {
						$lableLike.classList.add('liked');
					} else {
						$lableLike.classList.remove('liked');
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

			$itemComment.append($lableLike, $spanComment, $spanView)

			$paraItems.append($itemInfo, $itemComment);

			$container.append($imgItem, $paraItems)

			return $container
		})
		return postItem
    }
}