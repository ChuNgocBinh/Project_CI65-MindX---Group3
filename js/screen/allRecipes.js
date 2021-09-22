import BaseComponent from "../components/BaseComponent.js";

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
		let postItem = this.state.map((item, index) => {
			// let $contentItem = document.createElement('div');
			// $contentItem.classList.add('content__items');
			// $contentItem.innerHTML = `
			// 	<div class="img-item">
			// 		<img src="${item.image}" alt="img">
			// 	</div>
			// 	<div class="para-items">
			// 		<div class="item-info">
			// 			<h3>${item.title}</h3>
			// 			<p>${item.content}</p>
			// 		</div>
			// 		<div class="item-comment">
			// 			<label for="like" class="item"><i class="far fa-heart"></i> <span class="number-like">0</span></label>
			// 			<input type="checkbox" id="like" class="item">
			// 			<span id="comment" class="item"><i class="fas fa-comments"></i><span class="number-like">0</span></span>
			// 			<span id="view" class="item"><i class="fas fa-eye"></i><span class="number-like">0</span></span>
			// 		</div>
			// 	</div>
			// `
            let $contentItem = document.createElement('div');
			$contentItem.classList.add('card', 'searchTarget');
			$contentItem.addEventListener('click', function (e) {
				e.preventDefault();
				console.log(arr[index])
				localStorage.setItem('idFood', JSON.stringify(arr[index]));
				window.location.href = './detail.html'
			})
            $contentItem.innerHTML = `
				<img class="card-img" src="${item.linkImgFood}" alt="img">
				<div class="card-content">
					<div class="card-info">
						<h3>${item.nameFood}</h3>
						<div class="card-description">${item.desciptionFood}</div>
					</div>
					<div class="item-comment">
						<p>Người viết: ${item.author}</p>
						<span id="comment" class="item"><i class="fas fa-comments"></i><span class="number-like">0</span></span>
						<span id="view" class="item"><i class="fas fa-eye"></i><span class="number-like">0</span></span>
					</div>
				</div>
            `
			return $contentItem
		})
		return postItem








	}
}