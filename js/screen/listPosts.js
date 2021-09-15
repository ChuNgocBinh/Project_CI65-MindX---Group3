

let myArr = [];
db.collection("Posts").get().then((querySnapshot) => {
	querySnapshot.forEach((doc) => {
		// console.log(doc.data());

		myArr.push(doc.data())
	});
	console.log(myArr)

	let postItem = myArr.map(item => {
		let $contentItem = document.createElement('div');
		$contentItem.classList.add('content__items');
		$contentItem.innerHTML = `
				<div class="img-item">
					<img src="${item.image}" alt="img">
				</div>
				<div class="para-items">
					<div class="item-info">
						<h3>${item.title}</h3>
						<p>${item.subTitle}</p>
						<a href="#" class="details">Xem chi tiết</a>
					</div>
					<div class="item-comment">
						<label for="like" class="item"><i class="far fa-heart"></i> <span class="number-like">0</span></label>
						<input type="checkbox" id="like" class="item">
						<span id="comment" class="item"><i class="fas fa-comments"></i><span class="number-like">0</span></span>
						<span id="view" class="item"><i class="fas fa-eye"></i><span class="number-like">0</span></span>
					</div>
				</div>
			`

		return $contentItem
	})
	console.log(postItem)
	let master = document.querySelector('.master');
	master.append(...postItem)
	let titlePost = document.querySelector('.title-post')
	let subtitlePost = document.querySelector('.subTitle-post')
	let content = document.querySelector('.content-post')
	let details = document.querySelectorAll('.details');
	let para = document.querySelector('.para');
	let btnClose = document.querySelector('.btn-close');

	Array.from(details).forEach((item, index) => {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			para.classList.remove('para-hiden');
			master.classList.add('para-hiden');
			titlePost.innerHTML = myArr[index].title;
			subtitlePost.innerHTML = myArr[index].subTitle;
			content.innerHTML = myArr[index].textContent;
		})
		btnClose.onclick =function(){
			para.classList.add('para-hiden');
			master.classList.remove('para-hiden');
		}	
	})







});













