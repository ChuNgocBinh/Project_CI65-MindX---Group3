import BaseComponent from "./BaseComponent.js"

export default class TextAreaWraper extends BaseComponent {
    constructor(props) {
        super(props)
    }
    render() {
        let $container = document.createElement('div');
        $container.classList.add('form-group');

        let $textArea = document.createElement('textarea');
        $textArea.classList.add('form-control');
        $textArea.placeholder = this.props.placeholder;
        $textArea.value = this.props.value;
        $textArea.onchange = this.props.onchange;

        let $error = document.createElement('div');
        $error.classList.add('text-danger');
        $error.innerText = this.props.error;

        $container.appendChild($textArea);
        $container.appendChild($error);
        return $container;
    }
}