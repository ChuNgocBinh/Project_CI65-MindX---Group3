export default class BaseComponent {
    state; // lưu trữ dữ liệu của component (tồn tại trong component), có thể thay đổi giá trị
    props; // dữ liệu truyền từ bên ngoài vào component, chỉ có thể đọc (không thay đổi giá trị)

    constructor(props) {
        this.props = props;
    }

    /**
     * Hiển thị nội dung của component lên màn hình
     * 
     * @returns {HTMLElement}
     */
    render() {

    }

    /**
     * Thiết lập lại state của component và render lại component (Khi state thay đổi, component render lại)
     * 
     */
    setState(newState) {
        this.state = newState;
        this.render();
    }
}