let btn = document.querySelector('.post-btn');
btn.onclick = function () {
    // let title = document.querySelector('#title');
    // let subTitle = document.querySelector('#subTitle');
    // let image = document.querySelector('#image');
    // let textContent = document.querySelector('.ck-content ');
    // console.log(textContent.value)

    let data = CKEDITOR.instances.text-content.getData();
    console.log(data)










    // db.collection("Posts").add({
    //     title: title.value,
    //     subTitle: subTitle.value,
    //     image: image.value,
    //     textContent: textContent.value
    // })
    //     .then((docRef) => {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch((error) => {
    //         console.error("Error adding document: ", error);
    //     });
}

//     db.collection("users").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             console.log(doc.data());
//         });
//     });
// }