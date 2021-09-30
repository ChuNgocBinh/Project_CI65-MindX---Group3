import BaseComponent from "../components/BaseComponent.js";
import inputWraper from "../components/inputWraper.js";
import TextAreaWraper from "../components/textAreaWrapper.js";
import { updateFood } from "../models/postFireBase.js";

export default class EditFood extends BaseComponent {

    constructor(props){
        super(props);
        this.state ={}
    }

    handleInputChange = (name, value) => {
        this.state[name] = value.trim();
        console.log(this.state)
    }
    
    async render() {
        let idEditFoodJson = localStorage.getItem('idEditFood')
        let idEditFood = JSON.parse(idEditFoodJson);
        console.log(idEditFood);

        let contentFood = [];
        await db.collection('Post').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.id == idEditFood) {
                    contentFood.push(doc.data())
                }
            })
        })

        console.log(contentFood);

        let $title = document.createElement('h2');
        $title.classList.add('title');
        $title.innerHTML = 'Tạo món ăn mới'

        let _nameFood = new inputWraper({
            placeholder: 'Nhập tên món ăn',
            type: 'text',
            value: contentFood[0].nameFood,
            error: '',
            onchange: (e) => {
                this.handleInputChange('nameFood', e.target.value)
            }
        });

        let _desciptionFood = new inputWraper({
            placeholder: 'Nhập mô tả món ăn',
            type: 'text',
            value: contentFood[0].desciptionFood,
            error: '',
            onchange: (e) => {
                this.handleInputChange('desciptionFood', e.target.value)
            }
        });

        let _linkImgFood = new inputWraper({
            placeholder: 'Nhập đường dẫn ảnh minh họa món ăn',
            type: 'file',
            value: "",
            error: '',
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
            value: contentFood[0].tutorialFood,
            error: '',
            onchange: (e) => {
                this.handleInputChange('tutorialFood', e.target.value)
            }
        });

        let _levelFood = new inputWraper({
            placeholder: 'Nhập mức độ khó món ăn',
            type: 'text',
            value: contentFood[0].levelFood,
            error: '',
            onchange: (e) => {
                this.handleInputChange('levelFood', e.target.value)
            }
        });

        let _timeFood = new inputWraper({
            placeholder: 'Nhập thời gian thực hiện món ăn',
            type: 'text',
            value: contentFood[0].timeFood,
            error: '',
            onchange: (e) => {
                this.handleInputChange('timeFood', e.target.value)
            }
        });

        let _materialFood = new TextAreaWraper({
            placeholder: 'Nhập nguyên liệu thực hiện món ăn',
            value: contentFood[0].materialFood,
            error: '',
            onchange: (e) => {
                this.handleInputChange('materialFood', e.target.value)
            }
        });

        let _processlFood = new TextAreaWraper({
            placeholder: 'Nhập cách sơ chế món ăn',
            value: contentFood[0].processFood,
            error: '',
            onchange: (e) => {
                this.handleInputChange('processFood', e.target.value)
            }
        });

        let _skillFood = new TextAreaWraper({
            placeholder: 'Nhập cách chế biến món ăn',
            value: contentFood[0].skillFood,
            error: '',
            onchange: (e) => {
                this.handleInputChange('skillFood', e.target.value)
            }
        });

        let $btnSubmit = document.createElement('button');
        $btnSubmit.classList.add('btn');
        $btnSubmit.innerHTML = 'Sửa bài viết';

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
        )

        return $form
    }

    handleValid = (e) => {
        e.preventDefault();
        let data = this.state;

        let isPassed = true;

        if (data.nameFood == '') {
            isPassed = false;
        }

        if (data.desciptionFood == '') {
            isPassed = false;
        }

        if (data.linkImgFood == '') {
            isPassed = false;
        }

        if (data.tutorialFood == '') {
            isPassed = false;
        }

        if (data.levelFood == '') {
            isPassed = false;
        }

        if (data.timeFood == '') {
            isPassed = false;
        }

        if (data.materialFood == '') {
            isPassed = false;
        }

        if (data.processFood == '') {
            isPassed = false;
        }

        if (data.skillFood == '') {
            isPassed = false;
        }
        console.log(isPassed)

        if (isPassed) {
            let idEditFoodJson = localStorage.getItem('idEditFood')
            let idEditFood = JSON.parse(idEditFoodJson);
            console.log(idEditFood);
            console.log(data);
            updateFood('Post', idEditFood,data)
        }
    }
}