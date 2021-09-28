import BaseComponent from "../components/BaseComponent.js";
import inputWraper from "../components/inputWraper.js";
import TextAreaWraper from "../components/textAreaWrapper.js";
import setPosts from "../models/postFireBase.js";

export default class CreatePosts extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            // lưu dữ liệu người dùng nhập vào
            data: {
                nameFood: '',
                desciptionFood: '',
                linkImgFood: '',
                tutorialFood: '',
                levelFood: '',
                timeFood: '',
                materialFood: '',
                processFood: '',
                skillFood: '',
            },

            // lưu thông tin về lỗi của các truờng thông tin
            errors: {
                nameFood: '',
                desciptionFood: '',
                linkImgFood: '',
                tutorialFood: '',
                levelFood: '',
                timeFood: '',
                materialFood: '',
                processFood: '',
                skillFood: '',
            }
        };
    }


    handleInputChange = (name, value) => {
        let tmpState = this.state;
        tmpState.data[name] = value.trim();
        this.setState(tmpState)
    }

    render() {

        let $title = document.createElement('h2');
        $title.classList.add('title');
        $title.innerHTML = 'Tạo món ăn mới'

        let _nameFood = new inputWraper({
            placeholder: 'Nhập tên món ăn',
            type: 'text',
            value: this.state.data.nameFood,
            error: this.state.errors.nameFood,
            onchange: (e) => {
                this.handleInputChange('nameFood', e.target.value)
            }
        });

        let _desciptionFood = new inputWraper({
            placeholder: 'Nhập mô tả món ăn',
            type: 'text',
            value: this.state.data.desciptionFood,
            error: this.state.errors.desciptionFood,
            onchange: (e) => {
                this.handleInputChange('desciptionFood', e.target.value)
            }
        });

        let _linkImgFood = new inputWraper({
            placeholder: 'Nhập đường dẫn ảnh minh họa món ăn',
            type: 'file',
            value: "",
            error: this.state.errors.linkImgFood,
            onchange: async (e) => {
                // process image////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                var image = e.target.files[0];
                const metadata = {
                    contentType: 'image/jpeg'
                };
                var storageRef = storage.ref('images/' + image.name);
                var uploadTask = storageRef.put(image, metadata);
                // Listen for state changes, errors, and completion of the upload.
                uploadTask.on('state_changed',
                    (snapshot) => {
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    (error) => {
                        // A full list of error codes is available at
                        // https://firebase.google.com/docs/storage/web/handle-errors
                        switch (error.code) {
                            case 'storage/unauthorized':
                                // User doesn't have permission to access the object
                                break;
                            case 'storage/canceled':
                                // User canceled the upload
                                break;

                            // ...

                            case 'storage/unknown':
                                // Unknown error occurred, inspect error.serverResponse
                                break;
                        }
                    },
                    async () => {
                        // Upload completed successfully, now we can get the download URL
                        console.log('Upload completed successfully');
                        var imgURL = await uploadTask.snapshot.ref.getDownloadURL();
                        console.log('File available at', imgURL);
                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        this.handleInputChange('linkImgFood', imgURL);
                    }
                );
            }
        });



        let _tutorialFood = new inputWraper({
            placeholder: 'Nhập đường dẫn video hướng dẫn món ăn',
            type: 'text',
            value: this.state.data.tutorialFood,
            error: this.state.errors.tutorialFood,
            onchange: (e) => {
                this.handleInputChange('tutorialFood', e.target.value)
            }
        });

        let _levelFood = new inputWraper({
            placeholder: 'Nhập mức độ khó món ăn',
            type: 'text',
            value: this.state.data.levelFood,
            error: this.state.errors.levelFood,
            onchange: (e) => {
                this.handleInputChange('levelFood', e.target.value)
            }
        });

        let _timeFood = new inputWraper({
            placeholder: 'Nhập thời gian thực hiện món ăn',
            type: 'text',
            value: this.state.data.timeFood,
            error: this.state.errors.timeFood,
            onchange: (e) => {
                this.handleInputChange('timeFood', e.target.value)
            }
        });

        let _materialFood = new TextAreaWraper({
            placeholder: 'Nhập nguyên liệu thực hiện món ăn',
            value: this.state.data.materialFood,
            error: this.state.errors.materialFood,
            onchange: (e) => {
                this.handleInputChange('materialFood', e.target.value)
            }
        });

        let _processlFood = new TextAreaWraper({
            placeholder: 'Nhập cách sơ chế món ăn',
            value: this.state.data.processFood,
            error: this.state.errors.processFood,
            onchange: (e) => {
                this.handleInputChange('processFood', e.target.value)
            }
        });

        let _skillFood = new TextAreaWraper({
            placeholder: 'Nhập cách chế biến món ăn',
            value: this.state.data.skillFood,
            error: this.state.errors.skillFood,
            onchange: (e) => {
                this.handleInputChange('skillFood', e.target.value)
            }
        });

        let $btnSubmit = document.createElement('button');
        $btnSubmit.classList.add('btn');
        $btnSubmit.innerHTML = 'Tạo bài viết';

        let $btnEdit = document.createElement('button');
        $btnEdit.classList.add('btn');
        $btnEdit.innerHTML = 'chỉnh sửa bài viết';
        $btnEdit.onclick = async function (e) {
            e.preventDefault()



        }

        let editPost = async () => {


            let idEditFoodJson = localStorage.getItem('idEditFood')
            let idEditFood = JSON.parse(idEditFoodJson);
            console.log(idEditFood);
            if (idEditFood !== null) {
                let contentFood = [];
                await db.collection('Post').get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        if (doc.id == idEditFood) {
                            contentFood.push(doc.data())
                        }
                    })
                })
               
                let newState = this.state;
                newState.data.nameFood = contentFood[0].nameFood;
                newState.data.desciptionFood = contentFood[0].desciptionFood;

                console.log(newState)
                // this.setState(newState)

             
            }
        }

        editPost()







        let $form = document.createElement('form');
        $form.classList.add('create__post');
        $form.onsubmit = this.handleValid;

        $form.append(
            $title,
            _nameFood.render(),
            _desciptionFood.render(),
            _linkImgFood.render(),
            _tutorialFood.render(),
            _levelFood.render(),
            _timeFood.render(),
            _materialFood.render(),
            _processlFood.render(),
            _skillFood.render(),
            $btnSubmit,
            $btnEdit,
        )

        return $form
    }

    handleValid = (e) => {
        e.preventDefault();
        let data = this.state.data;
        let errors = this.state.errors;

        let isPassed = true;

        if (data.nameFood == '') {
            errors.nameFood = 'Vui lòng nhập tên món ăn';
            isPassed = false;
        }

        if (data.desciptionFood == '') {
            errors.desciptionFood = 'Vui lòng nhập mô tả món ăn';
            isPassed = false;
        }

        if (data.linkImgFood == '') {
            errors.linkImgFood = 'Vui lòng nhập đường dẫn ảnh minh họa món ăn';
            isPassed = false;
        }

        if (data.tutorialFood == '') {
            errors.tutorialFood = 'Vui lòng nhập đường dẫn video hướng dẫn món ăn';
            isPassed = false;
        }

        if (data.levelFood == '') {
            errors.levelFood = 'Vui lòng nhập độ khó món ăn';
            isPassed = false;
        }

        if (data.timeFood == '') {
            errors.timeFood = 'Vui lòng nhập thời gian thực hiện món ăn';
            isPassed = false;
        }

        if (data.materialFood == '') {
            errors.materialFood = 'Vui lòng nhập nguyên liệu thực hiện món ăn';
            isPassed = false;
        }

        if (data.processFood == '') {
            errors.processFood = 'Vui lòng nhập cách sơ chế món ăn';
            isPassed = false;
        }

        if (data.skillFood == '') {
            errors.skillFood = 'Vui lòng nhập cách chế biến món ăn';
            isPassed = false;
        }
        console.log(isPassed)

        let tmpState = this.state;
        tmpState.errors = errors
        this.setState(tmpState)

        if (isPassed) {
            setPosts(this.state.data)
            // window.location.href = "./home.html"

        }
    }

}






















// var editor;
// ClassicEditor
//     .create(document.querySelector('#editor'))
//     .then(newEditor => {
//         editor = newEditor;
//     })
//     .catch(error => {
//         console.error(error);
//     });

// let btn = document.querySelector('.post-btn');
// btn.onclick = function () {
//     let data = editor.getData();
//     editor.setData("")

//     db.collection("Posts").add({
//         title: title.value,
//         subTitle: subTitle.value,
//         image: image.value,
//         textContent: data
//     })
//         .then((docRef) => {
//             console.log("Document written with ID: ", docRef.id);
//         })
//         .catch((error) => {
//             console.error("Error adding document: ", error);
//         });

//     // window.location.href = './listPosts.html'
// }



