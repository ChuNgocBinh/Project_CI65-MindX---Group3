import BaseComponent from "../components/BaseComponent.js";

export default class Featured extends BaseComponent {
	constructor(props) {
		super(props);
		this.state =
        {
            image: './img/img-para/img0.jpg',
            title: 'Mì không người lái',
            content: 'Món mì tôm kinh điển, ngày càng phổ biến trong thời gian dịch bệnh.',
		}
	}

	render() {
			let $featuredItem = document.createElement('div');
			$featuredItem.classList.add('featured__item');
            $featuredItem.style.backgroundImage = `url(${this.state.image})`;
			$featuredItem.innerHTML = `
				<div class="featured-content">
					<div class="featured-info">
						<h3>${this.state.title}</h3>
						<p>${this.state.content}</p>
					</div>
					<div class="item-comment">
						<label for="like" class="item"><i class="far fa-heart"></i> <span class="number-like">0</span></label>
						<input type="checkbox" id="like" class="item">
						<span id="comment" class="item"><i class="fas fa-comments"></i><span class="number-like">0</span></span>
						<span id="view" class="item"><i class="fas fa-eye"></i><span class="number-like">0</span></span>
					</div>
				</div>
			`

		return $featuredItem


	}
}
