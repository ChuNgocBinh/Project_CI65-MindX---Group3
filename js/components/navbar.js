import BaseComponent from "./BaseComponent.js";

export default class Navbar extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = [
            { href: './home.html', name:'Trang chủ'},
            { href: '#', name:'Góc Review' },
            { href: '#', name:'Học nấu ăn' },
            { href: '#', name:'Blog'},
            { href: './about.html', name:'Giới thiệu'},
            { href: './contact.html', name:'Liên hệ' }
        ]
    }

    render() {
        let $navlink = document.createElement('div');
        $navlink.classList.add('navlink');
        let arrLink = this.state.map((link)=>{
            let $tag_a = document.createElement('a');
            $tag_a.href = link.href;
            $tag_a.innerHTML = link.name;
            // $tag_a.classList.add(`${link.class}`);
            return $tag_a
        })
        $navlink.append(...arrLink)
        $navlink.querySelector('a').classList.add('link-active');
        return $navlink
    }
}

