var editor;
ClassicEditor
    .create(document.querySelector('#editor'))
    .then(newEditor => {
        editor = newEditor;
    })
    .catch(error => {
        console.error(error);
    });

let btn = document.querySelector('.post-btn');
btn.onclick = function () {
    let data = editor.getData();
    editor.setData("")

    db.collection("Posts").add({
        title: title.value,
        subTitle: subTitle.value,
        image: image.value,
        textContent: data
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        
        // window.location.href = './listPosts.html'
}



