import BaseComponent from "../components/BaseComponent.js";

export default class Recipes extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = [
			{
				image: './img/img-para/img1.jpg',
				title: 'Vịt om măng chua nóng hổi nhưng giúp "hạ hỏa", dễ làm ngày giãn cách',
				content: 'Thịt vịt mát, dễ chế biến, dễ ăn, hợp túi tiền của mọi tầng lớp. Món vịt om măng ngon...',
			},
			{
				image: './img/img-para/img2.jpg',
				title: 'Những sai lầm nguy hiểm khi ăn thịt gà, cần loại bỏ ngay',
				content: 'Thịt gà là thực phẩm quen thuộc của mỗi gia đình, tuy nhiên không phải ai cũng biết ăn thịt...',
			},
			{
				image: './img/img-para/img3.jpg',
				title: 'Thực đơn 4 món ngon bổ dưỡng, giúp tăng cường sức đề kháng vào mùa dịch',
				content: '4 món này đều rất ngon và phù hợp với khẩu vị của nhiều người, đặc biệt có món trẻ nhỏ rất thích.',
			},
			{
				image: './img/img-para/img4.jpg',
				title: 'Cách chế biến món ốc len xào dừa trứ danh vùng cực Nam Tổ quốc',
				content: 'Ốc len xào dừa- món ăn bình dị gắn liền với bữa cơm của người dân lao động nhưng nay...',
			},
			{
				image: './img/img-para/img1.jpg',
				title: 'Vịt om măng chua nóng hổi nhưng giúp "hạ hỏa", dễ làm ngày giãn cách',
				content: 'Thịt vịt mát, dễ chế biến, dễ ăn, hợp túi tiền của mọi tầng lớp. Món vịt om măng ngon...',
			},
			{
				image: './img/img-para/img2.jpg',
				title: 'Những sai lầm nguy hiểm khi ăn thịt gà, cần loại bỏ ngay',
				content: 'Thịt gà là thực phẩm quen thuộc của mỗi gia đình, tuy nhiên không phải ai cũng biết ăn thịt...',
			},
			{
				image: './img/img-para/img3.jpg',
				title: 'Thực đơn 4 món ngon bổ dưỡng, giúp tăng cường sức đề kháng vào mùa dịch',
				content: '4 món này đều rất ngon và phù hợp với khẩu vị của nhiều người, đặc biệt có món trẻ nhỏ rất thích.',
			},
			{
				image: './img/img-para/img4.jpg',
				title: 'Cách chế biến món ốc len xào dừa trứ danh vùng cực Nam Tổ quốc',
				content: 'Ốc len xào dừa- món ăn bình dị gắn liền với bữa cơm của người dân lao động nhưng nay...',
			},
		]
	}

	render() {
		let postItem = this.state.map(item => {
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
			$contentItem.classList.add('card');
            $contentItem.innerHTML = `
                <div class="card-img">
					<img src="${item.image}" alt="img">
				</div>
				<div class="card-content">
					<div class="card-info">
						<h3>${item.title}</h3>
						<p>${item.content}</p>
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
		return postItem








	}
}