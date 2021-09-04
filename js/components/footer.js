import BaseComponent from "./BaseComponent.js";

export default class Footer extends BaseComponent {


    render() {
        let $footer = document.createElement('div');
        $footer.classList.add('footer')
        $footer.innerHTML = `
            <div class="footer__about">
                <h2>About US</h2>
                <div class="footer__about-content">
                    <img src="./img/Image-1-Copy-1024x629.png" alt="logo">
                    <p> Chùng tôi, với mong muốn đem lại cho mọi gia đình mỗi bữa cơm ngon và vô cùng bỗ dưỡng.
                        Đây là nơi để bạn độc giả thỏa sức chia sẻ các món ăn ngon, là nơi cung cấp các công thức nấu ăn, và
                        thực đơn cho
                        mọi gia đình việt.
                    </p>
                </div>
                <div class="footer__about-icons">
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer__contact">
                <h2>Liên Hệ</h2>
                <ul class="info">
                    <li>
                        <span><i class="fas fa-map-marked-alt"></i></span>
                        <span>Tòa nhà 22C Thành Công, Quận Ba Đình, T.p Hà Nội</span>
                    </li>
                    <li>
                        <span><i class="fas fa-phone-alt"></i></span>
                        <span>0968.68.68.68</span>
                    </li>
                    <li>
                        <span><i class="fas fa-envelope"></i></span>
                        <span>homnayangi@gmail.com</span>
                    </li>
                </ul>
            </div>
                
        `
        return $footer
    }

}