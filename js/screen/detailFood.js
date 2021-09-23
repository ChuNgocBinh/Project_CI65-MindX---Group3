import BaseComponent from "../components/BaseComponent.js";

export default class DetailFood extends BaseComponent {
    constructor(props) {
        super(props)
        this.state = [];
    }
    async render() {
        let idFoodJson = localStorage.getItem('idFood');
        let idFood = JSON.parse(idFoodJson);
        console.log(idFood)
        // let myArr = [];
        await db.collection('Post').get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                if (doc.id == idFood) {
                    this.state.push(doc.data())
                }
            })
        })
        console.log(this.state)
        let foodItem = this.state.map(item => {
            let $nameFood = document.createElement('h2');
            $nameFood.classList.add('nameFood');
            $nameFood.innerHTML = item.nameFood;

            let $desciptionFood = document.createElement('h4');
            $desciptionFood.classList.add('desciptionFood');
            $desciptionFood.innerHTML = item.desciptionFood

            let $imgFood = document.createElement('img');
            $imgFood.src = item.linkImgFood

            let $levelFood = document.createElement('p');
            $levelFood.classList.add('levelFood')
            $levelFood.innerHTML = ' <b>Mức độ: </b>' + item.levelFood;

            let $timeFood = document.createElement('p');
            $timeFood.classList.add('timeFood');
            $timeFood.innerHTML = '<b>Thời gian thực hiện: </b> ' + item.timeFood;

            let $materialFood = document.createElement('p');
            $materialFood.classList.add('materialFood');
            $materialFood.innerHTML = '<strong>Nguyên liệu: </strong>' + item.materialFood;

            let $processFood = document.createElement('p');
            $processFood.classList.add('processFood');
            $processFood.innerHTML = '<strong>Cách sơ chế: </strong>' + item.processFood;

            let $skillFood = document.createElement('p');
            $skillFood.classList.add('skillFood');
            $skillFood.innerHTML = '<strong>Cách chế biến: </strong> ' + item.skillFood;

            let $tutorialFood = document.createElement('div');
            $tutorialFood.classList.add('tutorialFood');
            let link = [item.tutorialFood];
            let linkVideo = link[0].split("");
            let linkVideoSlice = linkVideo.slice(32, 45);
            let myLink = linkVideoSlice.join("")
            console.log(myLink)
            $tutorialFood.innerHTML = `<iframe width="916" height="515" src="https://www.youtube.com/embed/${myLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

            let $author = document.createElement('p');
            $author.classList.add('author');
            $author.innerHTML = '<b>Người viết: </b>' + item.author;

            let $dateModifier = document.createElement('p');
            $dateModifier.classList.add('dateModifier');
            $dateModifier.innerHTML = '<b>Ngày viết: </b> ' + item.dateModifier;

            let $hr = document.createElement('hr');

            let $titleComment = document.createElement('h3');
            $titleComment.innerHTML = 'Bình Luận';

            let commentArray = item.comment.map(contentItem => {
                let $userComment = document.createElement('div');
                $userComment.classList.add('userComment')
                let $nameCommentUser = document.createElement('h4');
                $nameCommentUser.classList.add('nameCommentUser');
                $nameCommentUser.innerHTML = contentItem.name;
                let $contentCommentUser = document.createElement('p');
                $contentCommentUser.classList.add('contentCommentUser');
                $contentCommentUser.innerHTML = contentItem.commentUser;
                let $hrComment = document.createElement('hr');


                $userComment.append($nameCommentUser, $contentCommentUser,$hrComment)
                return $userComment
            })


            let $inputComment = document.createElement('input');
            $inputComment.classList.add('inputComment');
            $inputComment.placeholder = 'Viết bình luận'

            let $btnComment = document.createElement('button');
            $btnComment.classList.add('btn-comment');
            $btnComment.innerHTML = 'Bình luận'
            $btnComment.onclick = this.handleComment;


            let $main = document.createElement('div');
            $main.classList.add('main')
            $main.append(
                $nameFood,
                $desciptionFood,
                $imgFood,
                $levelFood,
                $timeFood,
                $materialFood,
                $processFood,
                $skillFood,
                $tutorialFood,
                $author,
                $dateModifier,
                $hr,
                $titleComment,
                ...commentArray,
                $inputComment,
                $btnComment
            )
            return $main

        })
        return foodItem
    }

    handleComment = async () => {
        let idFoodJson = localStorage.getItem('idFood');
        let idFood = JSON.parse(idFoodJson);
        let nameUser = await auth.currentUser.displayName;
        let content = document.querySelector('.inputComment').value;
        let postId = await db.collection('Post').doc(idFood);

        let postIdUpdate = await postId.update({
            comment: firebase.firestore.FieldValue.arrayUnion({
                name: nameUser,
                commentUser: content
            })
        });

        content = "",
            // this.render()
            window.location.reload()
    }
}
