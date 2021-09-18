import BaseComponent from "./BaseComponent.js"

export default class inputWraper extends BaseComponent {
    constructor(props) {
        super(props)
    }
    render() {
        let $container = document.createElement('div');
        $container.classList.add('form-group');

        let $input = document.createElement('input');
        $input.classList.add('form-control');
        $input.placeholder = this.props.placeholder;
        $input.type = this.props.type;
        $input.value = this.props.value;
        if ($input.type == 'file') {
            $input.accept = 'image/*'
        }
        $input.onchange = this.props.onchange;

        let $error = document.createElement('div');
        $error.classList.add('text-danger');
        $error.innerText = this.props.error;

        $container.appendChild($input);
        $container.appendChild($error);
        return $container;
    }
}